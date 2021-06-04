import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<WelcomeBean>('http://localhost:8080/welcomeBean')
    //console.log("Execute the welcome service")
  }

  excecuteWelcomeBeanServiceWithPathVaruable(name){
    return this.http.get<WelcomeBean>(`http://localhost:8080/welcomeBean/${name}`)
    //console.log("Execute the welcome service")
  }
}
