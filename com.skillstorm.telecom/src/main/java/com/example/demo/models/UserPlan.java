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
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
	@JoinColumn(name = "USERPLAN_USER_ID")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "USERPLAN_PLAN_ID", referencedColumnName = "PLAN_ID")
	private Plan plan;
	
	@OneToMany(mappedBy="userPlan", cascade = CascadeType.ALL)
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
	
	
}