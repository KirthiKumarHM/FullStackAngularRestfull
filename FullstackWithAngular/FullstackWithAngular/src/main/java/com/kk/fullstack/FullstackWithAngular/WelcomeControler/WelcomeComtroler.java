package com.kk.fullstack.FullstackWithAngular.WelcomeControler;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.kk.fullstack.FullstackWithAngular.WelcomeBean.WelcomeBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WelcomeComtroler {

	@GetMapping("/welcome")
	public String welcomeMessage() {
		return "Welocme to Restful Web-Service";
	}
	
	@GetMapping("/welcomeBean/")
	public WelcomeBean welcomeBeanMessage() {
		//throw new RuntimeException("Error duing get request");
		return new WelcomeBean("Welocme to Restful Web-Service Bean");
	}
	
	@GetMapping("/welcomeBean/{name}")
	public WelcomeBean welcomeBeanMessageWithPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Error duing get request");
		return new WelcomeBean("Welocme "+name+" to Restful Web-Service Bean");
	}
}
