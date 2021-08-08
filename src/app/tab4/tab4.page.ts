import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private authSrv: AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth) {}


  ngOnInit(): void {
    
  }

  onLogout(){
    console.log('Se cerro la sesion');
    this.authSrv.logout();
    this.router.navigateByUrl('/login');
  }

}
