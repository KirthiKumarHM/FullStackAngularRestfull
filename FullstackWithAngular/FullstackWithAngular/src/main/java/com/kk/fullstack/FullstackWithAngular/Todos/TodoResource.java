package com.kk.fullstack.FullstackWithAngular.Todos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

	@Autowired
	private TodoService todoService;
	
	@GetMapping(path = "/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		
		return todoService.getAllTodo();
	}
	
	@DeleteMapping(path="/users/{username}/todos/{id}")
	public ResponseEntity deleteTodo(@PathVariable String username,@PathVariable long id) {
		Todo todo = todoService.deleteTodo(id);
		
		if(todo == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.noContent().build();
	}
	
	/*
	 * @PutMapping(path="/users/{username}/todos/{id}") public ResponseEntity
	 * updateTodo(@PathVariable String username,@PathVariable long id) { Todo todo =
	 * todoService.updateTodo(id);
	 * 
	 * if(todo == null) { return ResponseEntity.notFound().build(); } return
	 * ResponseEntity.noContent().build(); }
	 */
	
	@GetMapping(path = "/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable long id ){
		
		return todoService.findById(id);
	}
	
	@PutMapping(path = "users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable long id, @RequestBody Todo todo ) {
			Todo updatedTodo = todoService.save(todo);
			return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
	}
	
	@PostMapping(path = "users/{username}/todos/")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo ) {
			Todo createdTodo = todoService.save(todo);
			
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
			return ResponseEntity.created(uri).build();
	}
}
