import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public isLogged: any = false;

  constructor(public afs: AngularFirestore) {
    
  }
  

  save ( usuario: Usuario){
    const refUsuarios = this.afs.collection("usuarios");
    
  }
}
