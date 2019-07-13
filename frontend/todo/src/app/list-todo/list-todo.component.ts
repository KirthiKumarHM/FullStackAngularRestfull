import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id : Number,
    public description: String,
    public completed : Boolean,
    public date : Date){
    
  }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos = [
   new Todo(1, "Yo yo description", false, new Date()),
   new Todo(2, "Awesome workplace", false, new Date()),
   new Todo(3, "Aadvi is angel", false, new Date())
  
  ]

  constructor() { }

  ngOnInit() {
  }

}
