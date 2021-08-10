package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class TelecomService {
	
	public String testString() {
		System.out.println("test string");
		return("hello");
	}

}
