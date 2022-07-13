package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.UserLogin;

public interface adminService {

	UserLogin registerUser(UserLogin user);
	
	List<UserLogin> getRegisteredUsers();
	
	UserLogin findByUser(String username);
}
