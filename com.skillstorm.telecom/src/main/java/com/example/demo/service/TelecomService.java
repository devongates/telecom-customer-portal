package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.data.UserRepository;
import com.example.demo.models.User;

@Service
public class TelecomService {
	
	@Autowired
	UserRepository userRepo;
	
	public String testString() {
		System.out.println("test string");
		return("hello");
	}
	
	public User getUser(User user){
		user = userRepo.findByEmailAndPassword(user.getEmail(),user.getPassword());
		return user;
	}
	
	public User createNewUser(User user) {
		System.out.println(user.getEmail());
		
		return user;
	}

}
