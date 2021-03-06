package com.example.demo.data;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Phone;

@Repository
public interface PhoneRepository extends JpaRepository<Phone,Integer> {

	public Optional<Phone> findByPhoneNumber(String number);
}
