import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : Number,
    public name : string,
    public description: String,
    public done : Boolean,
    public targetDate : Date){
    
  }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos : Todo[]
  // [
  //  new Todo(1, "Yo yo description", false, new Date()),
  //  new Todo(2, "Awesome workplace", false, new Date()),
  //  new Todo(3, "Aadvi is angel", false, new Date())
  
  // ]
  message = ''

  constructor(public todoDataService : TodoDataService,
              private router : Router) { }

  ngOnInit() {
    this.refreshTodos()
   
  }

  refreshTodos(){
    this.todoDataService.getAllTodos('kk').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }


  deleteTodo(name,id){
    console.log(name,id)
    this.message = `Todos of todo ${id} deleted.`
    this.todoDataService.deleteTodo('kk',id).subscribe(
                      
      response => {
        console.log(response);
        
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(id)
    this.router.navigate(['todos', id])
  }

  addTodo(){
    
    this.router.navigate(['todos', -1])
  }

}
