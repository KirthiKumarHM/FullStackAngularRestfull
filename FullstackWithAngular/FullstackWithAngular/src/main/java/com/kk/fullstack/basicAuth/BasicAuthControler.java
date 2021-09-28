package com.kk.fullstack.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kk.fullstack.FullstackWithAngular.WelcomeBean.WelcomeBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthControler {
	
	@GetMapping(path = "/basicauth")
	public WelcomeBean helloWorldBean() {
		return new WelcomeBean("You are authenticated");
	}

}
