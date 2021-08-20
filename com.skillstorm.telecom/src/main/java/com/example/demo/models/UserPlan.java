package com.example.demo.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "USERPLAN")
public class UserPlan {

	
	// ATTRIBUTES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USERPLAN_ID")
	private int id;
	
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "USERPLAN_USER_ID",insertable = false, updatable = false)
	private User user;
	
	@Column(name = "USERPLAN_USER_ID")
	private int userId;
	
	@Column(name = "USERPLAN_PLAN_ID")
	private int planId;

	@ManyToOne
	@JoinColumn(name = "USERPLAN_PLAN_ID",insertable = false, updatable = false)
	private Plan plan;
	
	
	
	
	@JsonManagedReference
	@OneToMany(mappedBy="userPlanId", cascade = CascadeType.ALL)
	private Set<Phone> phones;
	
	
	
	// CONSTRUCTORS

	public UserPlan() {
		super();
	}
	
	
	
	// GETTERS & SETTERS

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	public Set<Phone> getPhones() { 
		return phones; 
	}
	
	public void setPhones(Set<Phone> phones) { 
		this.phones = phones; 
	}


	public int getUserId() { return userId; }
	public void setUserId(int userId) { this.userId = userId; }

	public int getPlanId() { return planId; }
	public void setPlanId(int planId) { this.planId = planId; }
	
	
	
	
}