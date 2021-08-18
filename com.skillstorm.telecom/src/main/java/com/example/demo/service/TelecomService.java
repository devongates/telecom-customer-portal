package com.example.demo.service;


import java.util.Set;
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
import com.example.demo.data.PlanRepository;
import com.example.demo.data.UserRepository;
import com.example.demo.data.UserplanRepository;

@Service
public class TelecomService {
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	PhoneRepository phoneRepo;
	@Autowired
	UserplanRepository userplanRepo;
	@Autowired
	PlanRepository planRepo;
	
//	   __  _______ __________ 
//	  / / / / ___// ____/ __ \
//	 / / / /\__ \/ __/ / /_/ /
//	/ /_/ /___/ / /___/ _, _/ 
//	\____//____/_____/_/ |_|  
//	                          
	
	public List<User> getUsers() {
		return userRepo.findAll();
	}
	
	public int getUserId(String email){
		return userRepo.findByEmail(email).getId();
	}
	
	public User getUser(int id){
		return userRepo.findById(id).get();
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


	public List<Phone> getPhones() {
		return phoneRepo.findAll();
	}

	public Phone getPhone(int phoneId) {
		Optional<Phone> phoneData = phoneRepo.findById(phoneId);
		
		if (phoneData.isPresent()) {
			return phoneData.get();
		} else {
			return new Phone();
		}
	}

	public Phone createNewPhone(Phone phone) {
		//move existing phone number
		phoneRepo.findByPhoneNumber(phone.getPhoneNumber()).ifPresent(p->phone.setId(p.getId()));
		return phoneRepo.save(phone);
	}

	public void updatePhone(int phoneId, @Valid Phone phone) {
		Optional<Phone> phoneData = phoneRepo.findById(phoneId);
		
		if (phoneData.isPresent()) {
			Phone _phoneData = phoneData.get();
			
			_phoneData.setPhoneNumber(phone.getPhoneNumber());
			_phoneData.setPhoneName(phone.getPhoneName());
			_phoneData.setPhoneType(phone.getPhoneType());
			_phoneData.setUserPlanId(phone.getUserPlanId());
			
			phoneRepo.save(_phoneData);
		}
	}

	public void deletePhone(int phoneId) {
		phoneRepo.deleteById(phoneId);
	}
	
	
	public boolean isNumberInUse(String number) {
		return 
				phoneRepo.findByPhoneNumber(number).isPresent();
	}
	
	

//	   __  _______ __________  ____  __    ___    _   __
//	  / / / / ___// ____/ __ \/ __ \/ /   /   |  / | / /
//	 / / / /\__ \/ __/ / /_/ / /_/ / /   / /| | /  |/ / 
//	/ /_/ /___/ / /___/ _, _/ ____/ /___/ ___ |/ /|  /  
//	\____//____/_____/_/ |_/_/   /_____/_/  |_/_/ |_/   
//	     
	
	public Set<UserPlan> getUserPlansByUserId(int userId) {
		User user = userRepo.getById(userId);
		return user.getUserPlans();
	}
	
	public List<UserPlan> getUserPlans() {
		return userplanRepo.findAll();
	}

	public UserPlan getUserPlan(int userplanId) {
		Optional<UserPlan> userplanData = userplanRepo.findById(userplanId);
		
		if (userplanData.isPresent()) {
			return userplanData.get();
		} else {
			return new UserPlan();
		}
	}
	
	public UserPlan createNewUserPlan(UserPlan userPlan) {
		return userplanRepo.save(userPlan);
	}

	public void updateUserPlan(int userplanId, UserPlan userplan) {
		Optional<UserPlan> userplanData = userplanRepo.findById(userplanId);
		
		if (userplanData.isPresent()) {
			UserPlan _userplanData = userplanData.get();
			
			_userplanData.setPhones(userplan.getPhones());
			_userplanData.setPlan(userplan.getPlan());
			
			userplanRepo.save(_userplanData);
		}
	}

	public void deleteUserPlan(int userplanId) {
		userplanRepo.deleteById(userplanId);
	}
	

//     ____  __    ___    _   __
//    / __ \/ /   /   |  / | / /
//   / /_/ / /   / /| | /  |/ / 
//  / ____/ /___/ ___ |/ /|  /  
// /_/   /_____/_/  |_/_/ |_/   
//                             

	public List<Plan> getPlans() {
		return planRepo.findAll();
	}

	public Plan getPlan(int planId) {
		Optional<Plan> planData = planRepo.findById(planId);
		
		if (planData.isPresent()) {
			return planData.get();
		} else {
			return new Plan();
		}
	}

	public Plan createNewPlan(Plan plan) {
		return planRepo.save(plan);
	}

	public void updatePlan(int planId, Plan plan) {
		Optional<Plan> planData = planRepo.findById(planId);
		
		if (planData.isPresent()) {
			Plan _planData = planData.get();
			
			_planData.setBaseCost(plan.getBaseCost());
			_planData.setCostPerLine(plan.getCostPerLine());
			_planData.setMaxNumLines(plan.getMaxNumLines());
			_planData.setName(plan.getName());
			_planData.setUserPlans(plan.getUserPlans());
			
			planRepo.save(_planData);
		}	
	}

	public void deletePlan(int planId) {
		planRepo.deleteById(planId);
	}


}
