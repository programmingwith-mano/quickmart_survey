package com.quickmart.survey.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quickmart.survey.handler.CategoryCURDHandler;
import com.quickmart.survey.vo.CategoryVO;

@RestController
public final class CategoryCURDController {

	@Autowired
	CategoryCURDHandler categoryCURDHandler;
	// save category type
	// fetch category type
	// edit category type
	// delete category type

	// save categorys
	// fetch categorys
	// edit categorys
	// delete categorys

	// save category items
	// fetch category items
	// edit category items
	// delete category items

	@PostMapping("/quickmart/categories/save")
	public void categorySave(@RequestBody CategoryVO categoryVO) {
		categoryCURDHandler.categorySave(categoryVO);
	}
	
	@GetMapping("/quickmart/categories/fetch")
	public CategoryVO categoryFetch(@RequestParam Long categoryId) {
		return categoryCURDHandler.categoryFetch(categoryId);
	}

}
