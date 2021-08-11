package com.example.demo.controllers;


import java.util.Set;

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

	@GetMapping("/user")
	public ResponseEntity<User> getUser(@RequestParam (value="email", required=true) String email,
			@RequestParam (value="password", required=true) String password){
		User user = service.getUser(email,password);
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
	
	@GetMapping("/user/plans/{userplanId}")
	public ResponseEntity<UserPlan> getUserPlan(@PathVariable("userplanId") int userplanId){
		return new ResponseEntity<>(service.getUserPlan(userplanId), HttpStatus.OK);
	}
	
	@PostMapping("/user/plans")
	public ResponseEntity<UserPlan> createNewUserPlan(@RequestBody @Valid UserPlan userPlan){
		return new ResponseEntity<>(service.createNewUserPlan(userPlan), HttpStatus.CREATED);
	}
	
	@PutMapping("/user/plans/{userplanId}")
	public ResponseEntity<Void> updateUserPlan(@PathVariable("userplanId") int userplanId, @RequestBody @Valid UserPlan userPlan){
		service.updateUserPlan(userplanId, userPlan);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/user/plans/{userplanId}")
	public ResponseEntity<UserPlan> deleteUserPlan(@PathVariable("userplanId") int userplanId){
		return new ResponseEntity<>(service.deleteUserPlan(userplanId), HttpStatus.OK);
	}
	

//     ____  __  ______  _   ________
//    / __ \/ / / / __ \/ | / / ____/
//   / /_/ / /_/ / / / /  |/ / __/   
//  / ____/ __  / /_/ / /|  / /___   
// /_/   /_/ /_/\____/_/ |_/_____/   
//                                  

	@GetMapping("/user/plans/{userplanId}/phones")
	public ResponseEntity<Set<Phone>> getPhones(@PathVariable("userplanId") int userplanId){
		return new ResponseEntity<>(service.getPhones(userplanId), HttpStatus.OK);
	}

	@GetMapping("/user/plans/{userplanId}/phones/{phoneId}")
	public ResponseEntity<Phone> getPhone(@PathVariable("userplanId") int userplanId, @PathVariable("phoneId") int phoneId){
		return new ResponseEntity<>(service.getPhone(userplanId, phoneId), HttpStatus.OK);
	}
	
	@PostMapping("/user/plans/{userplanId}/phones")
	public ResponseEntity<Phone> createNewPhone(@PathVariable("userplanId") int userplanId, @RequestBody @Valid Phone phone){
		return new ResponseEntity<>(service.createNewPhone(userplanId, phone), HttpStatus.CREATED);
	}
	
	@PutMapping("/user/plans/{userplanId}/phones/{phoneId}")
	public ResponseEntity<Void> updatePhone(@PathVariable("userplanId") int userplanId, @PathVariable("phoneId") int phoneId, @RequestBody @Valid Phone phone){
		service.updatePhone(userplanId, phoneId, phone);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/user/plans/{userplanId}/phones/{phoneId}")
	public ResponseEntity<Phone> deletePhone(@PathVariable("planId") int planId, @PathVariable("phoneId") int phoneId){
		return new ResponseEntity<>(service.deletePhone(planId, phoneId), HttpStatus.OK);
	}

//     ____  __    ___    _   __
//    / __ \/ /   /   |  / | / /
//   / /_/ / /   / /| | /  |/ / 
//  / ____/ /___/ ___ |/ /|  /  
// /_/   /_____/_/  |_/_/ |_/   
//                             

	@GetMapping("/plans")
	public ResponseEntity<Set<Plan>> getPlans(){
		return new ResponseEntity<>(service.getPlans(), HttpStatus.OK);
	}
	
	@GetMapping("/plans/{planId}")
	public ResponseEntity<Plan> getPlan(@PathVariable("planId") int planId){
		return new ResponseEntity<>(service.getPlan(planId), HttpStatus.OK);
	}
	
	@PostMapping("/plans/")
	public ResponseEntity<Plan> createNewPlan(@RequestBody @Valid Plan plan){
		return new ResponseEntity<>(service.createNewPlan(plan), HttpStatus.CREATED);
	}
	
	@PutMapping("/plans/{planId}")
	public ResponseEntity<Void> updatePlan(@PathVariable("planId") int planId, @RequestBody @Valid Plan plan){
		service.updatePlan(planId, plan);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/plans/{planId}")
	public ResponseEntity<Plan> deletePlan(@PathVariable("planId") int planId){
		return new ResponseEntity<>(service.deletePlan(planId), HttpStatus.OK);
	}

}


