package com.quickmart.survey.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CATEGORIES")
public class Category extends AduitColumn {

	@Id
	@Column(name = "CATEGORY_ID")
	private Long categoryId;

	@Column(name = "CATEGORY_NAME")
	private String categoryName;

	@Column(name = "CATEGORY_TYPE_ID")
	private Long categoryTypeId;

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Long getCategoryTypeId() {
		return categoryTypeId;
	}

	public void setCategoryTypeId(Long categoryTypeId) {
		this.categoryTypeId = categoryTypeId;
	}

}
