package com.quickmart.survey.vo;

import java.util.List;

public class ResponseVO {

	private List<ProductVO> productList;
	
	private List<CategoryVO> categoryList;

	public List<ProductVO> getProductList() {
		return productList;
	}

	public void setProductList(List<ProductVO> productList) {
		this.productList = productList;
	}

	public List<CategoryVO> getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(List<CategoryVO> categoryList) {
		this.categoryList = categoryList;
	}
}
