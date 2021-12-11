package com.quickmart.survey.dao;

import java.util.List;

import com.quickmart.survey.dao.entity.Category;
import com.quickmart.survey.dao.entity.CategoryType;
import com.quickmart.survey.dao.entity.CustomerDetail;
import com.quickmart.survey.dao.entity.Product;

public interface QuickMartDAO {

	public void categorySave(Category category);

	public Category categoryFetch(Long categoryId);

	public List<Category> categoryFetchAll();

	public void categoryDelete(Long categoryId);

	public void categoryTypeSave(CategoryType categoryType);

	public List<CategoryType> categoryTypeFetchAll();

	public void productSave(Product product);

	public Product productFetch(Long productId);

	public List<Product> listProducts();

	public void productDelete(Long productId);

	public List<Category> listCategories();
	
	// Customer Details
	public CustomerDetail saveCustomer(CustomerDetail customerDetail);
}
