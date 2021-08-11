package com.example.demo.controllers;


import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@PutMapping("/user")
	public ResponseEntity<Void> updateUser(@RequestBody @Valid User user){
		service.updateUser(user);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/user")
	public ResponseEntity<User> deleteUser(@RequestBody @Valid User user){
		user = service.deleteUser(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	

//	   __  _______ __________  ____  __    ___    _   __
//	  / / / / ___// ____/ __ \/ __ \/ /   /   |  / | / /
//	 / / / /\__ \/ __/ / /_/ / /_/ / /   / /| | /  |/ / 
//	/ /_/ /___/ / /___/ _, _/ ____/ /___/ ___ |/ /|  /  
//	\____//____/_____/_/ |_/_/   /_____/_/  |_/_/ |_/   
//	                                                    

	
	@GetMapping("/user/plans")
	public ResponseEntity<Set<UserPlan>> getUserPlans(@RequestBody @Valid User user){
		Set<UserPlan> userPlans = service.getUserPlans(user);
		return new ResponseEntity<>(userPlans, HttpStatus.OK);
	}
	
	@GetMapping("/user/plan")
	public ResponseEntity<UserPlan> getUserPlan(@RequestBody @Valid User user){
		UserPlan userPlan = service.getUserPlan(user);
		return new ResponseEntity<>(userPlan, HttpStatus.OK);
	}
	
	@PostMapping("/user/plan")
	public ResponseEntity<UserPlan> createNewUserPlan(@RequestBody @Valid UserPlan userPlan){
		userPlan = service.createNewUserPlan(userPlan);
		return new ResponseEntity<>(userPlan, HttpStatus.CREATED);
	}
	
	@PutMapping("/user/plan")
	public ResponseEntity<Void> updateUserPlan(@RequestBody @Valid UserPlan userPlan){
		service.updateUserPlan(userPlan);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/user/plan")
	public ResponseEntity<UserPlan> deleteUserPlan(@RequestBody @Valid UserPlan userPlan){
		userPlan = service.deleteUserPlan(userPlan);
		return new ResponseEntity<>(userPlan, HttpStatus.OK);
	}
	

//     ____  __  ______  _   ________
//    / __ \/ / / / __ \/ | / / ____/
//   / /_/ / /_/ / / / /  |/ / __/   
//  / ____/ __  / /_/ / /|  / /___   
// /_/   /_/ /_/\____/_/ |_/_____/   
//                                  

	@GetMapping("/user/plan/phones")
	public ResponseEntity<Set<Phone>> getPhones(@RequestBody @Valid User user){
		Set<Phone> phones = service.getPhones(user);
		return new ResponseEntity<>(phones, HttpStatus.OK);
	}

	@GetMapping("/user/plan/phone")
	public ResponseEntity<Phone> getPhone(@RequestBody @Valid Phone phone){
		phone = service.getPhone(phone);
		return new ResponseEntity<>(phone, HttpStatus.OK);
	}
	
	@PostMapping("/user/plan/phone")
	public ResponseEntity<Phone> createNewPhone(@RequestBody @Valid Phone phone){
		phone = service.createNewPhone(phone);
		return new ResponseEntity<>(phone, HttpStatus.CREATED);
	}
	
	@PutMapping("/user/plan/phone")
	public ResponseEntity<Void> updatePhone(@RequestBody @Valid Phone phone){
		service.updatePhone(phone);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/user/plan/phone")
	public ResponseEntity<Phone> deletePhone(@RequestBody @Valid Phone phone){
		phone = service.deletePhone(phone);
		return new ResponseEntity<>(phone, HttpStatus.OK);
	}

//     ____  __    ___    _   __
//    / __ \/ /   /   |  / | / /
//   / /_/ / /   / /| | /  |/ / 
//  / ____/ /___/ ___ |/ /|  /  
// /_/   /_____/_/  |_/_/ |_/   
//                             

	@GetMapping("/plans")
	public ResponseEntity<Set<Plan>> getPlans(){
		Set<Plan> plans = service.getPlans();
		return new ResponseEntity<>(plans, HttpStatus.OK);
	}
	
	@GetMapping("/plan")
	public ResponseEntity<Plan> getPlan(@RequestBody @Valid Plan plan){
		plan = service.getPlan();
		return new ResponseEntity<>(plan, HttpStatus.OK);
	}
	
	@PostMapping("/plans")
	public ResponseEntity<Plan> createNewPlan(@RequestBody @Valid Plan plan){
		plan = service.createNewPlan(plan);
		return new ResponseEntity<>(plan, HttpStatus.CREATED);
	}
	
	@PutMapping("/plan")
	public ResponseEntity<Void> updatePlan(@RequestBody @Valid Plan plan){
		service.updatePlan(plan);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/plan")
	public ResponseEntity<Plan> deletePlan(@RequestBody @Valid Plan plan){
		plan = service.deletePlan(plan);
		return new ResponseEntity<>(plan, HttpStatus.OK);
	}

}


