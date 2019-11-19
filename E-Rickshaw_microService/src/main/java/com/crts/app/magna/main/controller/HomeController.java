package com.crts.app.magna.main.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.crts.app.magna.main.model.MfCustomerPersonalDetails;
import com.crts.app.magna.main.service.ServiceInterface;

@CrossOrigin("*")
@RestController
public class HomeController {
	@Autowired
	ServiceInterface si;
	
	@RequestMapping( value="/add",method=RequestMethod.POST)
	public void customerpersonaldetails(@RequestBody  MfCustomerPersonalDetails cust )
	{
		

		
		System.out.println(cust.getCust_id());
		System.out.println(cust.getAnnual_income());
		System.out.println(cust.getCust_local_address());
		System.out.println(cust.getCust_local_ps());
		System.out.println(cust.getCust_localdistid());
		System.out.println(cust.getCust_localstateid());
		System.out.println(cust.getCust_occupation());
		System.out.println(cust.getCust_p_address());
		System.out.println(cust.getCust_p_d_id());
		System.out.println(cust.getCust_p_distid());
		System.out.println(cust.getCust_p_ps());
		System.out.println(cust.getCust_p_stateid());
		si.SaveData(cust);
		
	}
	
	
	

}
