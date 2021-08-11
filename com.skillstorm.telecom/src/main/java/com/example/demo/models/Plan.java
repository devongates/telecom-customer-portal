package com.example.demo.models;

import java.math.BigDecimal;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "PLAN")
public class Plan {
	
	// ATTRIBUTES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PLAN_ID")
	private int id;
	
	@NotNull
	@Column(name = "PLAN_NAME")
	private String name;
	
	@NotNull
	@Column(name = "MAX_NUM_LINES")
	private int maxNumLines;
	
	@NotNull
	@Column(name = "BASE_COST")
	private BigDecimal baseCost;
	
	@NotNull
	@Column(name = "COST_PER_LINE")
	private BigDecimal costPerLine;
	
	@JsonIgnore
	@OneToMany(mappedBy="plan")
	private Set<UserPlan> userPlans;
	
	
	
	// CONSTRUCTORS
	

	public Plan() {
		super();
	}


	
	// GETTERS & SETTERS
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getMaxNumLines() {
		return maxNumLines;
	}

	public void setMaxNumLines(int maxNumLines) {
		this.maxNumLines = maxNumLines;
	}

	public BigDecimal getBaseCost() {
		return baseCost;
	}

	public void setBaseCost(BigDecimal baseCost) {
		this.baseCost = baseCost;
	}

	public BigDecimal getCostPerLine() {
		return costPerLine;
	}

	public void setCostPerLine(BigDecimal costPerLine) {
		this.costPerLine = costPerLine;
	}



	public Set<UserPlan> getUserPlans() { 
		return userPlans;
	}

	public void setUserPlans(Set<UserPlan> userPlans) {
		this.userPlans = userPlans;
	}


	public String getName() { return name; }
	public void setName(String name) { this.name = name; }
	
	
}
