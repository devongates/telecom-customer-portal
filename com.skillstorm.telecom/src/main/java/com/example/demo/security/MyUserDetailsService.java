package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.data.UserRepository;
import com.example.demo.models.User;

@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	UserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		try {
			User user = userRepo.findByEmail(username);
			return new MyUserDetails(user);
		}catch(Exception e) {
			throw new UsernameNotFoundException(username);
		}
	}

}
