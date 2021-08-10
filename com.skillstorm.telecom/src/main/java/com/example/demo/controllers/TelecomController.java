package com.example.demo.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;
import com.example.demo.service.TelecomService;


@RestController
@RequestMapping("api/v1/telecom")
@CrossOrigin("*")
public class TelecomController {
	
	@Autowired
	private TelecomService service;
	
	@GetMapping("/hi")
	public String test() {
		return service.testString();
	}
	
	@GetMapping("/user")
	public ResponseEntity<User> getUser(@RequestBody @Valid User user){
		//user = service.getUser(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createNewUser(@RequestBody @Valid User user){
		user = service.createNewUser(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

}
