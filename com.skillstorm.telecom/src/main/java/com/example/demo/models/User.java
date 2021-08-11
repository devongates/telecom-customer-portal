package com.example.demo.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "USER")
public class User {
	
	// ATTRIBUTES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USER_ID")
	private int id;
	
	@Email
	@NotBlank
	@Column(name = "EMAIL", unique=true)
	private String email;
	
	
	@NotBlank
	@Column(name = "PASSWORD")
	// TODO: handle authentication and encryption
	private String password;
	
	
	@OneToMany(mappedBy="user")
	private Set<UserPlan> userPlans;
	
	
	
	
	//CONSTRUCTORS
	
	public User() {
		super();
	}
	
	
	
	//GETTERS & SETTERS
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public Set<UserPlan> getUserPlans() { return userPlans; }
	public void setUserPlans(Set<UserPlan> userPlans) { this.userPlans = userPlans; }

	
}
