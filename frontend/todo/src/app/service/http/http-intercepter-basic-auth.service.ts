import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService : BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username = 'kklogin'
    // let password = 'aadvi'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();


    if(basicAuthHeaderString && username){
      req = req.clone({
        setHeaders:{
          Authorization : basicAuthHeaderString
        }
      })
    }
    

    return next.handle(req);
  }
}
