package com.kk.fullstack.FullstackWithAngular.Todos;

import java.util.Date;


public class Todo {

	private long id;
	private String name;
	private String description;
	private Date targetDate;
	private boolean isDone;
	
	public Todo() {
		super();
	}
	public Todo(long id, String name, String description, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	
	
	
	
}
