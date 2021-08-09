import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { Local } from '../../domain/locales';
import { LocalesService } from '../../services/locales.service';
import { FirestorageService } from 'src/app/services/firestorage.service';

@Component({
  selector: 'app-register-a',
  templateUrl: './register-a.page.html',
  styleUrls: ['./register-a.page.scss'],
})
export class RegisterAPage implements OnInit {

  constructor(private authSvc: AuthService, 
    private localesSrv: LocalesService, 
    private router: Router,
    public authSrv: AuthService,
    public firestorageService: FirestorageService) { }

  local : Local = new Local();
  newImage = '';
  newFile = '';

  ngOnInit() {
  }

  async onRegister(email, password){
    console.log(this.local);
    const path = "Locales";
    const name = this.local.nombre;

    const res = await this.firestorageService.uploadImage(this.newFile, path, name)
    this.local.foto= res;
    this.localesSrv.save(this.local);

    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        console.log("User -> ", user);
        this.router.navigateByUrl('/email')
      }
    } catch (error) {
      console.log("Error-> ",error);
    
    }
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
