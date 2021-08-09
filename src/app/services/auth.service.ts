import { Injectable } from '@angular/core';
import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.interface';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFirestoreDocument } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth,private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          
        }
        return of(null);
      })
    );
  }
  
  async resetPassword(email: string): Promise<void> {
    try {
      this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  //Metodo de Login Google
  async loginGoogle(): Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user ; 
    } catch (error) {
      console.log("Erro: " , error);
    }
  } 

  //Metodo de registrar 
  async register(email: string, password : string): Promise<User> {
    try {
      const {user} = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      this.updateUserData(user);
      return (user);

    } catch (error) {
      console.log("Error: " ,error);
    }
  }

  //metodo de verificar cuenta 
  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log("error" , error);
    }
  }

  isEmailVerified(user: User): boolean{
    return user.emailVerified == true ? true : false;
  }

  //Iniciar Sesion
  async login(email: string, password: string): Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithEmailAndPassword(email , password);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log("Error ", error)
      
    }
  }

  //Cerrar Sesion
  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log("Error",error)
      
    }
  }

  private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data : User = {
      uid:user.uid,
      email : user.email,
      emailVerified : user.emailVerified,
      displayName : user.displayName,
    };

    return userRef.set(data, {merge: true});

  }


/** 
  // Login 
  async onLogout(user: User){
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);

      
    } catch (error) {
      console.log("Error on Login", error)
    }
  }

  // Login 
  async onLogin(user: User){
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);

      
    } catch (error) {
      console.log("Error on Login", error)
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      //signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (user) {
        
      }

    } catch (error) {
      console.log("Error on Login", error)
    }
    // TODO sign into offline app
  }


  // Registrar 
  async onRegister (user: User){
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);

    } catch (error) {
      console.log("Error on Register", error)
    }
  } */
}
