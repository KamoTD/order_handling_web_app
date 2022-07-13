package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Customer;
import com.example.demo.Model.CustumerOrder;
import com.example.demo.Model.ISP;
import com.example.demo.Service.CustomerService;
import com.example.demo.Service.ISPService;
import com.example.demo.Service.OrderService;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CustomerController {
	
	@Autowired
	CustomerService customerservice;
	
	@Autowired
	OrderService custOrderService;
	
	@Autowired
	ISPService ispService;
	
	@GetMapping("/customers")
	public List<Customer> getAllCustomers(){
		
		return customerservice.getAllCustomers();
	}
	
	@PostMapping("/customers")
	public Customer addCustomer(@RequestBody Customer customer) {
		
		return customerservice.saveCustomer(customer);
	}
	
	@GetMapping("/customers/{id}")
	Customer getCustomerId(@PathVariable Long id) {
		
		return customerservice.getCustomerById(id);
	}
	
	@DeleteMapping("/customers/{id}")
	public String deleteCustomer(@PathVariable Long id) {
		
		customerservice.deleteCustomer(id);
		String msg = "Order Deleted Successfully";
		
		return msg;
	}
	
	//ISP Rest API
	@GetMapping("/isp")
	public List<ISP> getAllISP(){
		
		return ispService.getAllISP();
	}
	
	//ISP Rest API
	@PostMapping("/isp")
	public ISP saveISP(@RequestBody ISP isp) {
		return ispService.saveISP(isp);
	}
	
	//CustomerOrder Rest API
	@GetMapping("/orders")
	public List<CustumerOrder> getOrders(){
		
		return custOrderService.getOrders();
	}
	
	//CustomerOrder Rest API
	@PostMapping("/orders")
	public CustumerOrder saveOrder(@RequestBody CustumerOrder order){
		
		return custOrderService.saveISP(order);
	}

}
