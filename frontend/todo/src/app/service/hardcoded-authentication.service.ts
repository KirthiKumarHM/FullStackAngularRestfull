import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  athenticate(username, password){
    if(username ==='kklogin' && password === 'aadvi'){
      sessionStorage.setItem('AuthUser', username)
      return true
    }
    
  return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('AuthUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('AuthUser')
  }
}
