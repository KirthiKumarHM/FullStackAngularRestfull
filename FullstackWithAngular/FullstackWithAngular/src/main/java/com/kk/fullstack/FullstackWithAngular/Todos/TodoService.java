package com.kk.fullstack.FullstackWithAngular.Todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

	private static List<Todo> todoList = new ArrayList<>();
	public static int counter = 0;
	static {
		todoList.add(new Todo(++counter, "KK", "To complete full stack", new Date(), false));
		todoList.add(new Todo(++counter, "KK", "To go home", new Date(), false));
		todoList.add(new Todo(++counter, "KK", "ToGet job", new Date(), false));
		//todoList.add(new Todo(10004, "Rekha", "To get job", new Date(), true));
		//todoList.add(new Todo(10005, "JK", "To go sweeden", new Date(), false));
	}
	
	public List<Todo> getAllTodo()
	{
		return todoList;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()== -1 || todo.getId()== 0) {
			todo.setId(++counter);
			todoList.add(todo);
		}else {
			deleteTodo(todo.getId());
			todoList.add(todo);
		}
		return todo;

	}

	public Todo deleteTodo(long id) {
		
		Todo todo = findById(id);
		
		if(todo == null) {
			return null;
		}
		
		if(todo.getId() == id) {
		 todoList.remove(todo);
		}
		return todo;
		
		/*
		 * Iterator<Todo> it = todoList.iterator(); while(it.hasNext()) {
		 * if(it.next().getId() == id) { it.remove(); } }
		 */
	}

	public Todo findById(long id) {
		for(Todo todo : todoList) {
			if(todo.getId() == id)
				return todo;
		}
		return null;
	}
}
