import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-a',
  templateUrl: './register-a.page.html',
  styleUrls: ['./register-a.page.scss'],
})
export class RegisterAPage implements OnInit {

  user : User = new User();

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
