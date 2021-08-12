package com.example.demo.controllers;


import java.util.List;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Phone;
import com.example.demo.models.Plan;
import com.example.demo.models.User;
import com.example.demo.models.UserPlan;
import com.example.demo.service.TelecomService;


@RestController
@RequestMapping("api/v1/telecom")
@CrossOrigin("*")
public class TelecomController {
	
	@Autowired
	private TelecomService service;
	

//	   __  _______ __________ 
//	  / / / / ___// ____/ __ \
//	 / / / /\__ \/ __/ / /_/ /
//	/ /_/ /___/ / /___/ _, _/ 
//	\____//____/_____/_/ |_|  
//	                          
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsers() {
		return new ResponseEntity<>(service.getUsers(), HttpStatus.OK);
	}

	@GetMapping("/user")
	public ResponseEntity<User> getUser(@RequestParam (value="email", required=true) String email,
			@RequestParam (value="password", required=true) String password){
		return new ResponseEntity<>(service.getUser(email, password), HttpStatus.OK);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createNewUser(@RequestBody @Valid User user){
		return new ResponseEntity<>(service.createNewUser(user), HttpStatus.CREATED);
	}
	
	@PutMapping("/user/{userId}")
	public ResponseEntity<Void> updateUser(@PathVariable("userId") int userId, @RequestBody @Valid User user){
		service.updateUser(userId, user);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/user/{userId}")
	public ResponseEntity<Void> deleteUser(@PathVariable("userId") int userId){
		service.deleteUser(userId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	

//	   __  _______ __________  ____  __    ___    _   __
//	  / / / / ___// ____/ __ \/ __ \/ /   /   |  / | / /
//	 / / / /\__ \/ __/ / /_/ / /_/ / /   / /| | /  |/ / 
//	/ /_/ /___/ / /___/ _, _/ ____/ /___/ ___ |/ /|  /  
//	\____//____/_____/_/ |_/_/   /_____/_/  |_/_/ |_/   
//	                                                    

	
	@GetMapping("/userplans/{userplanId}")
	public ResponseEntity<UserPlan> getUserPlan(@PathVariable("userplanId") int userplanId){
		return new ResponseEntity<>(service.getUserPlan(userplanId), HttpStatus.OK);
	}
	
	@PostMapping("/userplans")
	public ResponseEntity<UserPlan> createNewUserPlan(@RequestBody @Valid UserPlan userPlan){
		return new ResponseEntity<>(service.createNewUserPlan(userPlan), HttpStatus.CREATED);
	}
	
	@PutMapping("/userplans/{userplanId}")
	public ResponseEntity<Void> updateUserPlan(@PathVariable("userplanId") int userplanId, @RequestBody @Valid UserPlan userPlan){
		service.updateUserPlan(userplanId, userPlan);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/userplans/{userplanId}")
	public ResponseEntity<Void> deleteUserPlan(@PathVariable("userplanId") int userplanId){
		service.deleteUserPlan(userplanId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	

//     ____  __  ______  _   ________
//    / __ \/ / / / __ \/ | / / ____/
//   / /_/ / /_/ / / / /  |/ / __/   
//  / ____/ __  / /_/ / /|  / /___   
// /_/   /_/ /_/\____/_/ |_/_____/   
//                                  

	@GetMapping("/phones")
	public ResponseEntity<List<Phone>> getPhones(){
		return new ResponseEntity<>(service.getPhones(), HttpStatus.OK);
	}

	@GetMapping("/phones/{phoneId}")
	public ResponseEntity<Phone> getPhone(@PathVariable("phoneId") int phoneId){
		return new ResponseEntity<>(service.getPhone(phoneId), HttpStatus.OK);
	}
	
	@PostMapping("/phones")
	public ResponseEntity<Phone> createNewPhone(@RequestBody @Valid Phone phone){
		return new ResponseEntity<>(service.createNewPhone(phone), HttpStatus.CREATED);
	}
	
	@PutMapping("/phones/{phoneId}")
	public ResponseEntity<Void> updatePhone(@PathVariable("phoneId") int phoneId, @RequestBody @Valid Phone phone){
		service.updatePhone(phoneId, phone);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/phones/{phoneId}")
	public ResponseEntity<Void> deletePhone(@PathVariable("phoneId") int phoneId){
		service.deletePhone(phoneId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/phone")
	public ResponseEntity<Boolean> isNumberInUse(@RequestParam (value="phonenumber") String number){
		return new ResponseEntity<>(service.isNumberInUse(number), HttpStatus.OK);
	}
	
	

//     ____  __    ___    _   __
//    / __ \/ /   /   |  / | / /
//   / /_/ / /   / /| | /  |/ / 
//  / ____/ /___/ ___ |/ /|  /  
// /_/   /_____/_/  |_/_/ |_/   
//                             

	@GetMapping("/plans")
	public ResponseEntity<List<Plan>> getPlans(){
		return new ResponseEntity<>(service.getPlans(), HttpStatus.OK);
	}
	
	@GetMapping("/plans/{planId}")
	public ResponseEntity<Plan> getPlan(@PathVariable("planId") String planId){
		System.out.println(planId);
		return new ResponseEntity<>(service.getPlan(Integer.parseInt(planId)), HttpStatus.OK);
	}
	
	@PostMapping("/plans")
	public ResponseEntity<Plan> createNewPlan(@RequestBody @Valid Plan plan){
		return new ResponseEntity<>(service.createNewPlan(plan), HttpStatus.CREATED);
	}
	
	@PutMapping("/plans/{planId}")
	public ResponseEntity<Void> updatePlan(@PathVariable("planId") int planId, @RequestBody @Valid Plan plan){
		service.updatePlan(planId, plan);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/plans/{planId}")
	public ResponseEntity<Void> deletePlan(@PathVariable("planId") int planId){
		service.deletePlan(planId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}


