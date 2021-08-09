import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, async } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/user.interface';
import { Producto } from '../../domain/producto';
import { ProductosService } from '../../services/productos.service';
import { FirestorageService } from '../../services/firestorage.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  producto: Producto = new Producto();
  public user$: Observable<User>;
  newImage = '';
  newFile = '';

  constructor(private route: ActivatedRoute, 
    private productosSrv: ProductosService, 
    private router: Router,
    public authSrv: AuthService,
    public firestorageService: FirestorageService
    ) { 
      route.queryParams.subscribe(params=>{
        console.log(params);
        
      })
    }

  ngOnInit() {
    
  }


  async guardar(){
    console.log(this.producto);

    const path = "Productos";
    const name = this.producto.nombre;

    const res = await this.firestorageService.uploadImage(this.newFile, path, name)
    this.producto.foto= res;
    this.productosSrv.save(this.producto)
    this.router.navigateByUrl('/admin/home')
  }

  async newImageUpload(event:any){

    console.log(event)
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image)=> {
        this.newImage = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
    

  }

}
