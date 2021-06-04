import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name = ''
welcomeMessage =''
errorMessage = ''
  //Activated Router
  constructor(
    private route : ActivatedRoute,
    private welcomeDataService : WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
   console.log(this.welcomeDataService.excecuteWelcomeBeanService())
   this.welcomeDataService.excecuteWelcomeBeanService().subscribe(
     response => this.handleResponseFromWelcomeService(response),
     error => this.handleErrorResponce(error)
   )
    console.log('end of line')
  }


  getWelcomeMessageWithPathVariable(){
    //console.log(this.welcomeDataService.excecuteWelcomeBeanService())
    this.welcomeDataService.excecuteWelcomeBeanServiceWithPathVaruable(this.name).subscribe(
      response => this.handleResponseFromWelcomeService(response),
      error => this.handleErrorResponce(error)
    )
     console.log('end of line')
   }

  handleResponseFromWelcomeService(response){
    console.log(response)
    console.log(response.message)
    this.welcomeMessage = response.message
  }

  handleErrorResponce(error){
    this.errorMessage = error.error.message
  }
}
