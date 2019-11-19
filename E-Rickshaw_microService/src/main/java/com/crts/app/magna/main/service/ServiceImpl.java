package com.crts.app.magna.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crts.app.magna.main.model.MfCustomerPersonalDetails;
import com.crts.app.magna.main.repository.HomeRepository;
@Service
public class ServiceImpl implements ServiceInterface {
@Autowired
HomeRepository hr;
	@Override
	public void SaveData(MfCustomerPersonalDetails cust)
	{
	hr.save(cust);
	}

}
