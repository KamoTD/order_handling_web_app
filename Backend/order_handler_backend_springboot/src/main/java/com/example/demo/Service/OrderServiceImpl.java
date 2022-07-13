package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.CustumerOrder;
import com.example.demo.Repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired 
	OrderRepository orderRepo;
	
	@Override
	public List<CustumerOrder> getOrders() {
		return orderRepo.findAll();
	}

	@Override
	public CustumerOrder saveISP(CustumerOrder order) {
		return orderRepo.save(order);
	}

}
