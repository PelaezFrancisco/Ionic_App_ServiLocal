import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Local } from '../domain/locales';
import { User } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(public afs: AngularFirestore) { }
  public user$: Observable<User>;

  save(local: Local){
    //Hacemos una refencia 
    const refLocal = this.afs.collection("locales");
    
    if (local.lid == null) {
      local.lid = this.afs.createId();
      local.activo == true;
    }  
    refLocal.doc(local.lid).set(Object.assign({}, local));
  }

  getLocales(): Observable <any[]> {
    return this.afs.collection("locales").valueChanges();

  }

  deleteLocales(local: Local ){
    const refLocal = this.afs.collection("locales");
    refLocal.doc(local.lid).delete();
  }
  }