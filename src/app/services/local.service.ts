import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Locales } from '../domain/locales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(public afs: AngularFirestore) { }

  save(locales: Locales){
    const refElectro = this.afs.collection("Posts");
    if (locales.uid == null){
      locales.uid = this.afs.createId();
      
    }
    refElectro.doc(locales.uid).set(Object.assign({},locales));
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
