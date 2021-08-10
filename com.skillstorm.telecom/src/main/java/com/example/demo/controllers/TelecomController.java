package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.TelecomService;


@RestController
@RequestMapping("api/v1/user")
@CrossOrigin("*")
public class TelecomController {
	
	@Autowired
	private TelecomService service;
	
	@GetMapping("/hi")
	public String test() {
		return service.testString();
	}

}
