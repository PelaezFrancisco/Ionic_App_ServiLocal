import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  user$: Observable<User> = this.authSrv.afAuth.user;


  constructor(private authSrv: AuthService) { }

  ngOnInit() {
  }

  async onSendEmail(){
    try {
      await this.authSrv.sendVerificationEmail();
    } catch (error) {
      console.log("Error ->" , error)
    }
    this.authSrv.sendVerificationEmail();

  }

  ngOnDestroy(): void{
    this.authSrv.logout();
  }
}
