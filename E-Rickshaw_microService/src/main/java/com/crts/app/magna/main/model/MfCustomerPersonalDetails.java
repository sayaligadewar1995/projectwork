package com.crts.app.magna.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GeneratorType;

@Entity
public class MfCustomerPersonalDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cust_p_d_id;
	private String cust_local_ps;
	private String cust_localdistid;
	private String cust_localstateid;
	private String cust_p_address;
	private String cust_p_ps;
	private String cust_p_distid;
	private String cust_p_stateid;
	private String annual_income;
	
	private int cust_id;
	private String cust_occupation;
	private String cust_local_address;

	public int getCust_p_d_id() {
		return cust_p_d_id;
	}

	public void setCust_p_d_id(int cust_p_d_id) {
		this.cust_p_d_id = cust_p_d_id;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}

	public String getCust_occupation() {
		return cust_occupation;
	}

	public void setCust_occupation(String cust_occupation) {
		this.cust_occupation = cust_occupation;
	}

	public String getCust_local_address() {
		return cust_local_address;
	}

	public void setCust_local_address(String cust_local_address) {
		this.cust_local_address = cust_local_address;
	}

	public String getCust_local_ps() {
		return cust_local_ps;
	}

	public void setCust_local_ps(String cust_local_ps) {
		this.cust_local_ps = cust_local_ps;
	}

	public String getCust_localdistid() {
		return cust_localdistid;
	}

	public void setCust_localdistid(String cust_localdistid) {
		this.cust_localdistid = cust_localdistid;
	}

	public String getCust_localstateid() {
		return cust_localstateid;
	}

	public void setCust_localstateid(String cust_localstateid) {
		this.cust_localstateid = cust_localstateid;
	}

	public String getCust_p_address() {
		return cust_p_address;
	}

	public void setCust_p_address(String cust_p_address) {
		this.cust_p_address = cust_p_address;
	}

	public String getCust_p_ps() {
		return cust_p_ps;
	}

	public void setCust_p_ps(String cust_p_ps) {
		this.cust_p_ps = cust_p_ps;
	}

	public String getCust_p_distid() {
		return cust_p_distid;
	}

	public void setCust_p_distid(String cust_p_distid) {
		this.cust_p_distid = cust_p_distid;
	}

	public String getCust_p_stateid() {
		return cust_p_stateid;
	}

	public void setCust_p_stateid(String cust_p_stateid) {
		this.cust_p_stateid = cust_p_stateid;
	}

	public String getAnnual_income() {
		return annual_income;
	}

	public void setAnnual_income(String annual_income) {
		this.annual_income = annual_income;
	}

}
