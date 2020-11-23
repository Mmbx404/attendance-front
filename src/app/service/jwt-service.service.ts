import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {
  private Token : any = null;

  constructor(private http: HttpClient) { }

  public getToken() {
    return this.Token;
  }

  public setToken(value : any) {
    this.Token = value;
  }

  sendIdToken () {
    this.http.post('',null).subscribe(value => {
      if (value != null) {
        this.setToken(value);
        localStorage.setItem('token',this.Token);
      } 
    });
  }

}
