import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

 

  constructor(private authSvc: AuthService, private router: Router) { }

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
