package com.quickmart.survey.dao.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;

public class AduitColumn {

	@Column(name = "CREATED_BY")
	private int createdBy;

	@Column(name = "CREATED_ON")
	private LocalDateTime createdOn;

	@Column(name = "LAST_MODIFIED_BY")
	private int lastModifiedBy;

	@Column(name = "LAST_MODIFIED_ON")
	private LocalDateTime lastModifiedOn;

	public int getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(int createdBy) {
		this.createdBy = createdBy;
	}

	public LocalDateTime getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}

	public int getLastModifiedBy() {
		return lastModifiedBy;
	}

	public void setLastModifiedBy(int lastModifiedBy) {
		this.lastModifiedBy = lastModifiedBy;
	}

	public LocalDateTime getLastModifiedOn() {
		return lastModifiedOn;
	}

	public void setLastModifiedOn(LocalDateTime lastModifiedOn) {
		this.lastModifiedOn = lastModifiedOn;
	}

	
}
