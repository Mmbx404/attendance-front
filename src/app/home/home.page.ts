import { Component } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public static SESSION_STORAGE_KEY: string = 'accessToken';
  userInfo = null;
  user : any;
  googleUser : any;

  constructor(private gapiService : GoogleApiService,private googleAuth : GoogleAuthService) {
  }

  private signInSuccessHandler(res: any) {
    this.user = res;
    sessionStorage.setItem(
        HomePage.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
    this.userInfo = res.tt.$t;
}

  async googleSingIn() {
  /*  this.googleAuth.getAuth()
            .subscribe((auth) => {
                auth.signIn().then(res => this.signInSuccessHandler(res));
            });*/
   try { 
    this.googleUser = await Plugins.GoogleAuth.signIn(null);
    console.log('user :', this.googleUser);
   this.userInfo = this.googleUser.email; }
   catch (err) {
     console.log(err);
     this.userInfo = Plugins.GoogleAuth.signIn(null)
   } 
  }
  
  

}
