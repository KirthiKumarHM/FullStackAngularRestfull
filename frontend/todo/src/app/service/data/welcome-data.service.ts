import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class WelcomeBean{
  constructor(public message : string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  excecuteWelcomeBeanService(){
    return this.http.get<WelcomeBean>('${API_URL}/welcomeBean')
    //console.log("Execute the welcome service")
  }

  excecuteWelcomeBeanServiceWithPathVaruable(name){
    // let basicAuthHeaderString = this.createBasicAuthHTTPHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get<WelcomeBean>(`${API_URL}/welcomeBean/${name}`
    //,{headers}
    );
    //console.log("Execute the welcome service")
  }

  // createBasicAuthHTTPHeader(){
  //   let username = 'kklogin'
  //   let password = 'aadvi'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;

  // }

  // excecuteWelcomeBeanServiceWithPathVaruable(name){
  //   return this.http.get<WelcomeBean>(`http://localhost:8080/welcomeBean/${name}`)
  //   //console.log("Execute the welcome service")
  // }

}
