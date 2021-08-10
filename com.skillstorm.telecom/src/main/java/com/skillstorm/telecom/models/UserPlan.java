package com.skillstorm.telecom.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "USERPLAN")
public class UserPlan {
	
	// ATTRIBUTES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USERPLAN_ID")
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "USERPLAN_USER_ID", referencedColumnName = "USER_ID")
	private int userId;
	
	@OneToOne
	@JoinColumn(name = "USERPLAN_PLAN_ID", referencedColumnName = "PLAN_ID")
	private int planId;
	
	
	
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

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getPlanId() {
		return planId;
	}

	public void setPlanId(int planId) {
		this.planId = planId;
	}
}
