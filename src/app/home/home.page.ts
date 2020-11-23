import { Component } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { JwtServiceService } from '../service/jwt-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public static SESSION_STORAGE_KEY: string = 'accessToken';
  userInfo = null;
  userAccessToken = null;
  userAccessTokenId = null;
  userServerAuthCode = null;
  user : any;
  googleUser : any;

  private jwtService : JwtServiceService;

  constructor(private gapiService : GoogleApiService,private googleAuth : GoogleAuthService,private router: Router) {
  }

  private signInSuccessHandler(res: any) {
    this.user = res;
    sessionStorage.setItem(
        HomePage.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
    //this.userInfo = res.tt.$t;
    this.userInfo = res;
}

  async googleSingIn() {
  /*  this.googleAuth.getAuth()
            .subscribe((auth) => {
                auth.signIn().then(res => this.signInSuccessHandler(res));
            });*/
   try { 
    this.googleUser = await Plugins.GoogleAuth.signIn(null);
    console.log('user :', this.googleUser);
  this.userInfo = this.googleUser.email; 
  this.userAccessToken = this.googleUser.authentication.accessToken;
  this.userAccessTokenId = this.googleUser.authentication.idToken;
}
   catch (err) {
     console.log(err);
     this.userInfo = Plugins.GoogleAuth.signIn(null)
   } 
   // this if condition will be used when back-end is ready
  /* if (this.jwtService.getToken != null) {
    this.router.navigate(['/qrcode']);
   } */
   if (this.userInfo != null) {
     this.router.navigate(['/qrcode']);
   }
  }
  
  

}
