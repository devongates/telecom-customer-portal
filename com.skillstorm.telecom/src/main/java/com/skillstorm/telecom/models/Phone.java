package com.skillstorm.telecom.models;

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

@Entity
@Table(name = "PHONE")
public class Phone {
	
	// ATTRIBUTES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PHONE_ID")
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "PHONE_USERPLAN_ID")
	private int userPlanId;
	
	@Column(name = "PHONE_NUMBER")
	@NotNull
	@Pattern(regexp = "^[0-9]{10}$")
	private String phoneNumber;

	
	
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

	public int getUserPlanId() {
		return userPlanId;
	}

	public void setUserPlanId(int userPlanId) {
		this.userPlanId = userPlanId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
