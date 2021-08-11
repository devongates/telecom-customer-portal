package com.example.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Plan;

public interface PlanRepository extends JpaRepository<Plan, Integer> {

}
