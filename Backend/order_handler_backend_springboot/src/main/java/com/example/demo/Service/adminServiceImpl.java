package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.UserLogin;
import com.example.demo.Repository.adminRepo;

@Service
public class adminServiceImpl implements adminService {

	@Autowired
	adminRepo adminRepository;
	
	@Override
	public UserLogin registerUser(UserLogin user) {
		return adminRepository.save(user);
	}

	@Override
	public List<UserLogin> getRegisteredUsers() {
		return adminRepository.findAll();
	}

	@Override
	public UserLogin findByUser(String username) {
		
		if(adminRepository.findById(username).isPresent()) {
			return adminRepository.findById(username).get();
		}else {
			return null;
		}
	}

}
