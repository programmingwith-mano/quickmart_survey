package com.quickmart.survey.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.quickmart.survey.service.QuickMartService;
import com.quickmart.survey.vo.CategoryVO;
import com.quickmart.survey.vo.ProductVO;

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

	public List<ProductVO> listProducts() {
		return quickMartService.listProducts();
	}

	public List<CategoryVO> listCategories() {
		return quickMartService.listCategories();
	}
}
