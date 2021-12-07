package com.quickmart.survey.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CUST_SELECTED_CATEGORY_ITEMS")
public class CustomerSelectedCategoryItem {

	@Id
	@Column(name = "SELECTED_CAT_ITM_ID")
	private int selectedCategoryItemId;

	@Column(name = "CATEGORY_ITEM_ID")
	private int categoryItemId;

	@Column(name = "CATEGORY_ITEM_NAME")
	private String categoryItemName;

	@Column(name = "CUSTOMER_ID")
	private String customerId;

	@Column(name = "CATEGORY_ID")
	private int categoryId;

	public int getSelectedCategoryItemId() {
		return selectedCategoryItemId;
	}

	public void setSelectedCategoryItemId(int selectedCategoryItemId) {
		this.selectedCategoryItemId = selectedCategoryItemId;
	}

	public int getCategoryItemId() {
		return categoryItemId;
	}

	public void setCategoryItemId(int categoryItemId) {
		this.categoryItemId = categoryItemId;
	}

	public String getCategoryItemName() {
		return categoryItemName;
	}

	public void setCategoryItemName(String categoryItemName) {
		this.categoryItemName = categoryItemName;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

}
