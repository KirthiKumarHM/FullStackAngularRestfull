import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WelcomeBean } from './data/welcome-data.service';
import { map } from 'rxjs/operators'
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  excecuteJWTAuthenticationService(username, password){
    
   

    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('AuthUser', username)
          sessionStorage.setItem('token', `Bearer ${data.token}`)
          return data;
        }
      )
    );
    //console.log("Execute the welcome service")
  }

  excecuteAuthenticationService(username, password){
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<WelcomeBean>(`${API_URL}/basicauth`,{headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('AuthUser', username)
          sessionStorage.setItem('token', basicAuthHeaderString)
          return data;
        }
      )
    );
    //console.log("Execute the welcome service")
  }


  getAuthenticatedUser(){
    return sessionStorage.getItem('AuthUser')
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem('token')
  }
  

  isUserLoggedIn(){
    let user = sessionStorage.getItem('AuthUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('AuthUser')
    sessionStorage.removeItem('token')
  }
}
