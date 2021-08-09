import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private authSrv: AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth) {}


  ngOnInit(): void {
    
  }

  onLogout(){
    console.log('Se cerro la sesion');
    this.authSrv.logout();
    this.router.navigateByUrl('/login-a');
  }

  onMapa(){
    this.router.navigateByUrl('mapa')
  }

}
