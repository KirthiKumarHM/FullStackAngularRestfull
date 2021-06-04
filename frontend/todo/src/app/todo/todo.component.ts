import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  
  todo : Todo
  constructor(private todoDataService : TodoDataService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, '', '', false, new Date())
       console.log(this.id)
       if(this.id != -1){
        this.todoDataService.getTodo('KK',this.id).subscribe(
          data => {
            console.log(data)
            this.todo = data
          }
        )
       }    
  }

  saveTodo(){
    console.log('save')
    if(this.id == -1){
      this.todoDataService.addTodo('KK', this.todo).subscribe(
        data => {
          console.log(data)
        }
      )
    }else{
      this.todoDataService.updateTodo('KK',this.id, this.todo).subscribe(
        data => {
          console.log(data)
        //  this.todo = data
        }
      )
    }
    
    this.router.navigate(['todos'])
  }

  
}
