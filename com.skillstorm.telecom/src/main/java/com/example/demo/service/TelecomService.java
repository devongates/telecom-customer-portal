package com.example.demo.service;


import java.util.Set;
import java.util.TreeSet;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.models.User;
import com.example.demo.models.UserPlan;
import com.example.demo.models.Phone;
import com.example.demo.models.Plan;
import com.example.demo.data.PhoneRepository;
import com.example.demo.data.UserRepository;

@Service
public class TelecomService {
	
//	   __  _______ __________ 
//	  / / / / ___// ____/ __ \
//	 / / / /\__ \/ __/ / /_/ /
//	/ /_/ /___/ / /___/ _, _/ 
//	\____//____/_____/_/ |_|  
//	                          

	@Autowired
	UserRepository userRepo;
	@Autowired
	PhoneRepository phoneRepo;

	public User getUser(String email, String password){
		return userRepo.findByEmailAndPassword(email,password);
	}
	
	public User createNewUser(User user) {
		return userRepo.save(user);
	}
	
	public void updateUser(int userId, User user) {
		Optional<User> userData = userRepo.findById(userId);
		
		if (userData.isPresent()) {
			User _userData = userData.get();
			
			_userData.setEmail(user.getEmail());
			_userData.setPassword(user.getPassword());
			_userData.setUserPlans(user.getUserPlans());
			
			userRepo.save(_userData);
		}
	}

	public void deleteUser(int userId) {
		userRepo.deleteById(userId);
	}
	
//     ____  __  ______  _   ________
//    / __ \/ / / / __ \/ | / / ____/
//   / /_/ / /_/ / / / /  |/ / __/   
//  / ____/ __  / /_/ / /|  / /___   
// /_/   /_/ /_/\____/_/ |_/_____/   
//                                  


	public Set<Phone> getPhones(int planId) {
		return new TreeSet<Phone>();
	}

	public Phone getPhone(int planId, int phoneId) {
		return new Phone();
	}

	public Phone createNewPhone(int planId, Phone phone) {
		return new Phone();
	}

	public void updatePhone(int planId, int phoneId, @Valid Phone phone) {
		// TODO
	}

	public Phone deletePhone(int planId, int phoneId) {
		return new Phone();
	}

//	   __  _______ __________  ____  __    ___    _   __
//	  / / / / ___// ____/ __ \/ __ \/ /   /   |  / | / /
//	 / / / /\__ \/ __/ / /_/ / /_/ / /   / /| | /  |/ / 
//	/ /_/ /___/ / /___/ _, _/ ____/ /___/ ___ |/ /|  /  
//	\____//____/_____/_/ |_/_/   /_____/_/  |_/_/ |_/   
//	     
	
	public Set<UserPlan> getUserPlans(User user) {
		return new TreeSet<UserPlan>();
	}

	public UserPlan getUserPlan(int userplanId) {
		return new UserPlan();
	}
	
	public UserPlan createNewUserPlan(UserPlan userPlan) {
		return new UserPlan();
	}

	public void updateUserPlan(int userplanId, UserPlan userplan) {
		// TODO
	}

	public UserPlan deleteUserPlan(int userplanId) {
		return new UserPlan();
	}
	

//     ____  __    ___    _   __
//    / __ \/ /   /   |  / | / /
//   / /_/ / /   / /| | /  |/ / 
//  / ____/ /___/ ___ |/ /|  /  
// /_/   /_____/_/  |_/_/ |_/   
//                             

	public Set<Plan> getPlans() {
		return new TreeSet<Plan>();
	}

	public Plan getPlan(int planId) {
		return new Plan();
	}

	public Plan createNewPlan(Plan plan) {
		return new Plan();
	}

	public void updatePlan(int planId, Plan plan) {
		// TODO 
	}

	public Plan deletePlan(int planId) {
		return new Plan();
	}


}
