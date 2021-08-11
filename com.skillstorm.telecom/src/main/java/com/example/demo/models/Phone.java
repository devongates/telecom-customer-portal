package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "PHONE")
public class Phone {
	
	// ATTRIBUTES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PHONE_ID")
	private int id;
	
	@Column(name = "PHONE_NUMBER", unique=true)
	@NotNull
	@Pattern(regexp = "^[0-9]{10}$")
	private String phoneNumber;
	
	@Column(name = "PHONE_NAME")
	@NotNull
	private String phoneName;
	
	@Column(name = "PHONE_TYPE")
	@NotNull
	private String phoneType;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "PHONE_USERPLAN_ID")
	private UserPlan userPlan;
	
	
	
	
	// CONSTRUCTORS
	
	public Phone() {
		super();
	}



	// GETTERS & SETTERS
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UserPlan getUserPlan() {
		return userPlan;
	}

	public void setUserPlan(UserPlan userPlan) {
		this.userPlan = userPlan;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPhoneName() { return phoneName; }
	public void setPhoneName(String phoneName) { this.phoneName = phoneName; }

	public String getPhoneType() { return phoneType; }
	public void setPhoneType(String phoneType) { this.phoneType = phoneType; }
	
	
}
