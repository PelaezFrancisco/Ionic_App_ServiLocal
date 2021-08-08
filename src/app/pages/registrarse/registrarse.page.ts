import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  user : User = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if( user){
      console.log('Successfully created user!');
      this.router.navigateByUrl('/tabs/tab1');
    }
  }

}
