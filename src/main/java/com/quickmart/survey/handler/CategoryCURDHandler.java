package com.quickmart.survey.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.quickmart.survey.service.QuickMartService;
import com.quickmart.survey.vo.CategoryVO;

@Component("categoryCURDHandler")
public class CategoryCURDHandler {

	@Autowired
	QuickMartService quickMartService;

	public void categorySave(CategoryVO categoryVO) {
		quickMartService.categorySave(categoryVO);
	}

	public CategoryVO categoryFetch(Long categoryId) {
		return quickMartService.categoryFetch(categoryId);
	}
}
