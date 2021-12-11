package com.quickmart.survey.vo;

import java.util.List;

public class RequestVO {
	
	private CustomerDetailVO customerData;
	
	private List<CustomerTransactionVO> customerTransactionVO;

	public CustomerDetailVO getCustomerData() {
		return customerData;
	}

	public void setCustomerData(CustomerDetailVO customerData) {
		this.customerData = customerData;
	}

	public List<CustomerTransactionVO> getCustomerTransactionVO() {
		return customerTransactionVO;
	}

	public void setCustomerTransactionVO(List<CustomerTransactionVO> customerTransactionVO) {
		this.customerTransactionVO = customerTransactionVO;
	}
}
