package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.ISP;
import com.example.demo.Repository.IspRepository;

@Service
public class ISPServiceImpl implements ISPService {

	@Autowired
	IspRepository ispRepo;
	
	@Override
	public List<ISP> getAllISP() {
		return ispRepo.findAll();
	}

	@Override
	public ISP saveISP(ISP isp) {
		return ispRepo.save(isp);
	}

}
