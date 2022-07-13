package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.ISP;

public interface ISPService {

	List<ISP> getAllISP();
		
	ISP saveISP(ISP isp);
		
}
