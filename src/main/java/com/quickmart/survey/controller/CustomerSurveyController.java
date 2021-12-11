package com.quickmart.survey.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.quickmart.survey.dao.entity.CustomerDetail;
import com.quickmart.survey.handler.CustomerDetailsHandler;

@CrossOrigin(origins = "http://localhost:5000")
@RestController
@RequestMapping("/api/quickmart/customers")
public final class CustomerSurveyController {

	// save customer category
	// fetch customer category
	// edit customer category

	@Autowired
	private CustomerDetailsHandler customerDetailsHandler;

	@PostMapping("/save")
	public @ResponseBody ResponseEntity<?> saveCustomer(@RequestBody CustomerDetail customerDetail) {
		customerDetail = customerDetailsHandler.saveCustomer(customerDetail);
		return ResponseEntity.status(HttpStatus.OK).body(customerDetail);
	}

}
