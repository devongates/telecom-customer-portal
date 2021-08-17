package com.example.demo.data;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	
	public User findByEmailAndPassword(String email,String password);

	public User findByEmail(String username);
	
}

