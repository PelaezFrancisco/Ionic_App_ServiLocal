import { LocalService } from './../services/local.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app'
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  locales : any;
  busqueda: string;
  local: any;

  loc=[];
  images = [];

  constructor(private authSrv: AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth, private _localService: LocalService,
    private dataService: DataService,public navCtrl: NavController) {}
    

  ngOnInit(): void {
    this.locales = this._localService.getLocales();
  }
  /*
  loadImg(img: string): string {
    var storage = firebase.storage();
    var gsReference = storage.refFromURL(img);
    gsReference.getDownloadURL()
      .then((url) => {
        console.log(url);
        return url;
      })

    return null;
  }
  */

  
  buscar() {
    console.log(this.busqueda)
  }

  redirect(idProd:string){
    console.log(idProd)
    this.local = this._localService.findLocalesId(idProd)
    this.dataService.setData(idProd, this.local);
    //console.log('/local/'+idProd)
    let url = '/local/'+idProd
    
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
          idProduct: idProd
      }
    };

    this.router.navigate(['/local'], navigationExtras);
    
    
   //this.router.navigate('local/');
  }

  onLogout(){
    console.log('Se cerro la sesion');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}
