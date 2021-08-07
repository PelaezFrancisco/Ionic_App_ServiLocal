import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { async, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { trace } from '@angular/fire/performance';
import { Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { User } from 'src/app/domain/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private readonly userDisposable: Subscription|undefined;

user: User = new User();
  showLoginButton = false;
  showLogoutButton = false;

  constructor(public readonly auth: AngularFireAuth, 
    @Inject(PLATFORM_ID) platformId: object,
    private router: Router,
    private authSvc: AuthService
    ) {

      



    if (!isPlatformServer(platformId)) {
      this.userDisposable = this.auth.authState.pipe(
        trace('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.showLoginButton = !isLoggedIn;
        this.showLogoutButton = isLoggedIn;
      });
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  async login() {
    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(user);
    this.router.navigateByUrl('/tab1');
    // TODO sign into offline app
  }

  async loginAnonymously() {
    const user = await this.auth.signInAnonymously();
    console.log(user);
    // TODO sign into offline app
  }

  logout() {
    this.auth.signOut();
    
    // TODO sign out of offline app
  }
  registrarse() {
    this.router.navigate(['./registrarse'])
    // TODO sign out of offline app
  }
  
  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    
    if (user) {
      console.log("Successfully logedd in!")
      this.router.navigateByUrl('/tab1');
    }
  }

}
