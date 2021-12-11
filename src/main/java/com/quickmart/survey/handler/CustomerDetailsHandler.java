package com.quickmart.survey.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.quickmart.survey.dao.entity.CustomerDetail;
import com.quickmart.survey.service.QuickMartService;

@Component("customerDetailsHandler")
public class CustomerDetailsHandler {

	@Autowired
	private QuickMartService quickMartService;
	
	public CustomerDetail saveCustomer(CustomerDetail customerDetail) {
		return quickMartService.saveCustomer(customerDetail);
	}
}
