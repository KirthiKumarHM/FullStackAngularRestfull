import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='kklogin'
  password =''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router : Router,
              private harcodedAuthentication : HardcodedAuthenticationService,
              private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);
   // console.log('before ' + this.harcodedAuthentication.isUserLoggedIn())
    if(this.harcodedAuthentication.athenticate(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    }else{
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin(){
      this.basicAuthenticationService.excecuteJWTAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )      
  }

   // console.log('After ' + this.harcodedAuthentication.isUserLoggedIn())
     
  

  

}
