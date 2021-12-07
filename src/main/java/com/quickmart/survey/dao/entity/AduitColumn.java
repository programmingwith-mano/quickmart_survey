package com.quickmart.survey.dao.entity;

import java.time.LocalDate;

import javax.persistence.Column;

public class AduitColumn {

	@Column(name = "CREATED_BY")
	private int createdBy;

	@Column(name = "CREATED_ON")
	private LocalDate createdOn;

	@Column(name = "LAST_MODIFIED_BY")
	private int lastModifiedBy;

	@Column(name = "LAST_MODIFIED_ON")
	private LocalDate lastModifiedOn;

	public int getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(int createdBy) {
		this.createdBy = createdBy;
	}

	public LocalDate getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDate createdOn) {
		this.createdOn = createdOn;
	}

	public int getLastModifiedBy() {
		return lastModifiedBy;
	}

	public void setLastModifiedBy(int lastModifiedBy) {
		this.lastModifiedBy = lastModifiedBy;
	}

	public LocalDate getLastModifiedOn() {
		return lastModifiedOn;
	}

	public void setLastModifiedOn(LocalDate lastModifiedOn) {
		this.lastModifiedOn = lastModifiedOn;
	}

}
