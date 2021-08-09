import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../domain/producto';
import { User } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public afs: AngularFirestore) { }
  public user$: Observable<User>;

  save(producto: Producto){
    //Hacemos una refencia 
    const refProductos = this.afs.collection("productos");
    
    if (producto.pid == null) {
      producto.pid = this.afs.createId();
      producto.activo == true;
    }  
    refProductos.doc(producto.pid).set(Object.assign({}, producto));
  }

  getProductos(): Observable <any[]> {
    return this.afs.collection("productos").valueChanges();

  }
  findProductos(busqueda): Observable<any[]> {
    return this.afs.collection("productos",
    ref => ref.where("local","==",busqueda)).valueChanges();
  }

  deleteProducto(producto: Producto){
    const refProductos = this.afs.collection("productos");
    refProductos.doc(producto.pid).delete();
  }
}
