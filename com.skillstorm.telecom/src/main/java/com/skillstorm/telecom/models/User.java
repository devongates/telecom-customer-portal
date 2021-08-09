package com.skillstorm.telecom.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table
public class User {
	
	// ATTRIBUTES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@Column
	@Email
	@NotBlank
	private String email;
	
	@NotBlank
	// TODO: handle authentication and encryption
	private String password;
	
	
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

	public @Email @NotBlank String getEmail() {
		return email;
	}

	public void setEmail(@Email @NotBlank String email) {
		this.email = email;
	}

	public @NotBlank String getPassword() {
		return password;
	}

	public void setPassword(@NotBlank String password) {
		this.password = password;
	}
	
	
	
}
