package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.UserLogin;
import com.example.demo.Repository.adminRepo;
import com.example.demo.Service.adminService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class adminController {

	@Autowired
	adminRepo adminRepository;
	
	@Autowired
	adminService adminS;
	
	@PostMapping("/users")
	public ResponseEntity<UserLogin> validateUser(@RequestBody UserLogin user){
		
		if(adminRepository.findByusername(user.getUsername()).getPassword().equals(user.getPassword())) {
			return ResponseEntity.ok(user);
		}else {
			return null;
		}
	}
	
	@GetMapping("/user/{id}")
	@ResponseBody
	public UserLogin getUserByUsername(@PathVariable("id") String userId) {
		return adminRepository.findByusername(userId);
	}
	
	@PostMapping("/user")
	public UserLogin registerUser(@RequestBody UserLogin user){
		return adminS.registerUser(user);
	}
	
	@GetMapping("/user")
	public List<UserLogin> getRegisteredUsers(){
		return adminS.getRegisteredUsers();
	}
	
	
	
}
