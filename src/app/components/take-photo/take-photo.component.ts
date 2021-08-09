import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.component.html',
  styleUrls: ['./take-photo.component.scss'],
})
export class TakePhotoComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  async onRegister(email, password){
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

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.file[0];
    const filePath = 'upload/imagen.png';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

  }


}
