package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.UserLogin;

@Repository
public interface adminRepo extends JpaRepository<UserLogin, String> {

	UserLogin findByusername(String username);
	
	UserLogin findBypassword(String password);
}
