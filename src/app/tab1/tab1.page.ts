import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private authSrv: AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth) {}


  ngOnInit(): void {
    
  }

    

  onLogout(){
    console.log('Se cerro la sesion');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}
