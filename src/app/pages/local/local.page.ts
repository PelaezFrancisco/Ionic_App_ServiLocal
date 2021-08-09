import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  data: any;
  id: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    this.route.params.subscribe(params => {
      this.id = params['idProduct']; 
      console.log(this.id);
    });
   }
  

  ngOnInit() {
    
  }

  goBack(){
    this.navCtrl.pop()
  }

  
}
