import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AgmCoreModule } from '@agm/core';
import { LocalPage } from './pages/local/local.page';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey:''
    }),
    HttpModule,
    RouterModule.forRoot(
      [ {path: 'local/:idProd', component: LocalPage}])

  ],

  providers: [GooglePlus,FirebaseAuthentication, AngularFireStorageModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
