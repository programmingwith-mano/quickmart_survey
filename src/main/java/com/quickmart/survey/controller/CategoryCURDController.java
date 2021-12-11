package com.quickmart.survey.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.quickmart.survey.handler.CategoryCURDHandler;
import com.quickmart.survey.vo.CategoryVO;
import com.quickmart.survey.vo.ProductVO;
import com.quickmart.survey.vo.ResponseVO;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/quickmart/categories")
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

	@PostMapping("/save")
	public void categorySave(@RequestBody CategoryVO categoryVO) {
		categoryCURDHandler.categorySave(categoryVO);
	}
	
	@GetMapping("/fetch")
	public CategoryVO categoryFetch(@RequestParam Long categoryId) {
		return categoryCURDHandler.categoryFetch(categoryId);
	}

	@GetMapping("/listproducts")
	public @ResponseBody ResponseEntity<?> listCategoriesWithProducts() {
		ResponseVO responseVO = new ResponseVO();
		List<ProductVO> productList = categoryCURDHandler.listProducts();
		List<CategoryVO> categoryList = categoryCURDHandler.listCategories();
		responseVO.setProductList(productList);
		responseVO.setCategoryList(categoryList);
		return ResponseEntity.status(HttpStatus.OK).body(responseVO);
	}
	
}
