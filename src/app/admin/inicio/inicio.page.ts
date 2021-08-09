import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/user.interface'
import { Observable } from 'rxjs';
import { ProductosService } from '../../services/productos.service';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public authSrv: AuthService,
    private productosSrv: ProductosService,
    private router: Router) { }

  public user$: Observable<User>;
  productos: any;

  newImage = '';

  ngOnInit() {
    
    this.productos = this.productosSrv.findProductos("Fybeca");

  }
  update(producto: Producto){
    console.log("Ingresa al metodo")
    console.log(producto.nombre);
    
    let params : NavigationExtras= {
      queryParams :{
        producto: producto
      }
    };
    this.router.navigate(['/crear'], params)

  }

  borrar(producto: Producto){
    this.productos = this.productosSrv.deleteProducto(producto)
    console.log("Producto a Eliminar" , this.productos);
    this.router.navigate(['/admin/home'])
  }

  newImageUpload(event:any){
    console.log(event)
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((image)=> {
        this.newImage = image.target.result as string;

      });
      reader.readAsDataURL(event.target.files[0]);
    }

  }

}
