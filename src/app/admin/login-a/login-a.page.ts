import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { async, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { trace } from '@angular/fire/performance';
import { Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { User } from 'src/app/domain/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.page.html',
  styleUrls: ['./login-a.page.scss'],
})
export class LoginAPage implements OnInit {

  constructor(public auth: AngularFireAuth, 
    private authSvc: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
    
  }

  async onLogin(email, password){
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerfied = this.authSvc.isEmailVerified(user);
        console.log("Verificacion", isVerfied);

        if (isVerfied == true || isVerfied==false) {
          this.router.navigateByUrl('/admin/home')
        }
      }
    } catch (error) {
      console.log("Error->", error);
    }
  }

  async onLoginGoogle(){
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerfied = true;
        console.log("Verificacion", isVerfied);

        if (isVerfied == true) {
          this.router.navigateByUrl('/admin/home-email')
        }
      }
    } catch (error) {
      console.log("Erro ->" , error)
    }

  }

  registrarse() {
    this.router.navigate(['./register-a'])
    // TODO sign out of offline app
  }

  recuperarPass() {
    this.router.navigate(['./forgetp'])
    // TODO sign out of offline app
  }

  redirectUser(isVerified: boolean){

  }
    
}

