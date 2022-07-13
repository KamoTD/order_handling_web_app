package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.Customer;

public interface CustomerService {

	//Returning all customers
	List<Customer> getAllCustomers();
	
	//Adding customer to the DB
	Customer saveCustomer(Customer customer);
	
	//Returning only a single customer by the subId
	Customer getCustomerById(Long id);
	
	//Deleting single customer
	void deleteCustomer(Long id);
}
