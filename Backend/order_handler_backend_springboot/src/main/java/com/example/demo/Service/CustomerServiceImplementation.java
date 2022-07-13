package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Customer;
import com.example.demo.Repository.CustomerRepositiry;

@Service
public class CustomerServiceImplementation implements CustomerService {

	@Autowired
	CustomerRepositiry customerrepository;
	
	@Override
	public List<Customer> getAllCustomers() {
		
		return customerrepository.findAll();
	}

	@Override
	public Customer saveCustomer(Customer customer) {
		 return customerrepository.save(customer);
	}

	@Override
	public Customer getCustomerById(Long id) {
		//Checking if the subId exist
		if(customerrepository.findById(id).isPresent()) {
			return customerrepository.findById(id).get();
		}
		
		return null;
	}

	@Override
	public void deleteCustomer(Long id) {
		
		customerrepository.delete(getCustomerById(id));
	}

}
