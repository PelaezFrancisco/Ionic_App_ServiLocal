import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

@Component({
  selector: 'app-register-a',
  templateUrl: './register-a.page.html',
  styleUrls: ['./register-a.page.scss'],
})
export class RegisterAPage implements OnInit {

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


}
