import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetp',
  templateUrl: './forgetp.page.html',
  styleUrls: ['./forgetp.page.scss'],
})
export class ForgetpPage{

  constructor(private authSrv: AuthService, private router : Router) { }

  async onResestPass(email){
    try {
      await this.authSrv.resetPassword(email.value);
      this.router.navigateByUrl('/login');

    } catch (error) {
      console.log("Error->", error);
    }
  }

}
