package com.quickmart.survey.service;

import java.util.List;

import com.quickmart.survey.vo.CategoryTypeVO;
import com.quickmart.survey.vo.CategoryVO;
import com.quickmart.survey.vo.ProductVO;

public interface QuickMartService {

	public void categorySave(CategoryVO categoryVO);

	public CategoryVO categoryFetch(Long categoryId);
	
	public List<CategoryVO> categoryFetchAll();
	
	public void categoryDelete(Long categoryId);
	
	public void categoryTypeSave(CategoryTypeVO categoryTypeVO);
	
	public List<CategoryTypeVO> categoryTypeFetchAll();
	
	public void productSave(ProductVO productVO);

	public ProductVO productFetch(Long productId);
	
	public List<ProductVO> productFetchAll();
	
	public void productDelete(Long productId);

}
