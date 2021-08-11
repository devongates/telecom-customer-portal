package com.example.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.UserPlan;

public interface UserplanRepository extends JpaRepository<UserPlan, Integer>{
	
}
