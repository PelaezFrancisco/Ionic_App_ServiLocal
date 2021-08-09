import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Local } from '../domain/locales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(public afs: AngularFirestore) { }

  save(locales: Local){
    const refElectro = this.afs.collection("Posts");
    if (locales.lid == null){
      locales.lid = this.afs.createId();
      
    }
    refElectro.doc(locales.lid).set(Object.assign({},locales));
  }

  getLocales(): Observable<any[]> {
    return this.afs.collection("locales").valueChanges();
  }

  findLocales(busqueda): Observable<any[]> {
    return this.afs.collection("Posts",
    ref => ref.where("nombre","==",busqueda)).valueChanges();
  }

  findLocalesId(busqueda): Observable<any[]> {
    return this.afs.collection("Posts",
    ref => ref.where("uid","==",busqueda)).valueChanges();
  }
}
