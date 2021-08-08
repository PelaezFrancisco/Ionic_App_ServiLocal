import { Component, OnInit } from '@angular/core';
import { PerfilPage } from '../perfil/perfil.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  about= PerfilPage;

  constructor() { }

  ngOnInit() {
  }

}
