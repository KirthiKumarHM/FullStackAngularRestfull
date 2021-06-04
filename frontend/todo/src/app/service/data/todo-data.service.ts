import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  getAllTodos(name){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${name}/todos`)
  }

  deleteTodo(name,id){
    return this.http.delete<Todo>(`http://localhost:8080/users/${name}/todos/${id}`)
  }

  getTodo(name,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${name}/todos/${id}`)
  }

  updateTodo(name,id, todo){
    return this.http.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
  }

  addTodo(name, todo){
    return this.http.post(`http://localhost:8080/users/${name}/todos/`, todo)
  }
}
