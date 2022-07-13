package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.CustumerOrder;

public interface OrderService {

	List<CustumerOrder> getOrders();
	
	CustumerOrder saveISP(CustumerOrder order);
}
