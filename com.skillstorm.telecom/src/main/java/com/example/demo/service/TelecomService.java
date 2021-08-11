package com.example.demo.service;

import java.util.Set;
import java.util.TreeSet;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.example.demo.models.Phone;
import com.example.demo.models.Plan;
import com.example.demo.models.User;
import com.example.demo.models.UserPlan;

@Service
public class TelecomService {
	
//	@Autowired
//	UserRepository userRepo;
	
//	   __  _______ __________ 
//	  / / / / ___// ____/ __ \
//	 / / / /\__ \/ __/ / /_/ /
//	/ /_/ /___/ / /___/ _, _/ 
//	\____//____/_____/_/ |_|  
//	                          

	public User getUser(User user){
		return new User();
	}
	
	public User createNewUser(User user) {
		return new User();
	}
	
	public void updateUser(User user) {
		//TODO
	}

	public User deleteUser(User user) {
		return new User();
	}
	
//     ____  __  ______  _   ________
//    / __ \/ / / / __ \/ | / / ____/
//   / /_/ / /_/ / / / /  |/ / __/   
//  / ____/ __  / /_/ / /|  / /___   
// /_/   /_/ /_/\____/_/ |_/_____/   
//                                  

	
	public Set<Phone> getPhones(@Valid User user) {
		return new TreeSet<Phone>();
	}

	public Phone getPhone(Phone phone) {
		return new Phone();
	}

	public Phone createNewPhone(Phone phone) {
		return new Phone();
	}

	public void updatePhone(@Valid Phone phone) {
		// TODO
	}

	public Phone deletePhone(Phone phone) {
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

	public UserPlan getUserPlan(User user) {
		return new UserPlan();
	}
	
	public UserPlan createNewUserPlan(UserPlan userPlan) {
		return new UserPlan();
	}

	public void updateUserPlan(@Valid UserPlan userPlan) {
		// TODO
	}

	public UserPlan deleteUserPlan(UserPlan userPlan) {
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

	public @Valid Plan getPlan() {
		return new Plan();
	}

	public Plan createNewPlan(Plan plan) {
		return new Plan();
	}

	public void updatePlan(Plan plan) {
		// TODO 
	}

	public Plan deletePlan(Plan plan) {
		return new Plan();
	}


}
