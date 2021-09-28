import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';
import { API_URL } from 'src/app/app.constants';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  getAllTodos(name){
    return this.http.get<Todo[]>(`${API_URL}/users/${name}/todos`)
  }

  deleteTodo(name,id){
    return this.http.delete<Todo>(`${API_URL}/users/${name}/todos/${id}`)
  }

  getTodo(name,id){
    return this.http.get<Todo>(`${API_URL}/users/${name}/todos/${id}`)
  }

  updateTodo(name,id, todo){
    return this.http.put(`${API_URL}/users/${name}/todos/${id}`, todo)
  }

  addTodo(name, todo){
    return this.http.post(`${API_URL}/users/${name}/todos/`, todo)
  }
}
