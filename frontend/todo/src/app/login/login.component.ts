import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private harcodedAuthentication : HardcodedAuthenticationService) { }

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

   // console.log('After ' + this.harcodedAuthentication.isUserLoggedIn())
     
  }

  

}
