package com.quickmart.survey.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.quickmart.survey.dao.QuickMartDAO;
import com.quickmart.survey.dao.entity.Category;
import com.quickmart.survey.dao.entity.CategoryType;
import com.quickmart.survey.dao.entity.CustomerDetail;
import com.quickmart.survey.dao.entity.Product;
import com.quickmart.survey.dao.impl.repositories.CategoryJPARepository;
import com.quickmart.survey.dao.impl.repositories.CategoryTypeJPARepository;
import com.quickmart.survey.dao.impl.repositories.CustomerJPARepository;
import com.quickmart.survey.dao.impl.repositories.ProductJPARepository;
import com.quickmart.survey.mapper.QuickMartMapper;
import com.quickmart.survey.vo.ProductVO;

@Component("quickMartDAO")
public class QuickMartDAOImpl implements QuickMartDAO {

	@Autowired
	CategoryJPARepository categoryJPARepository;

	@Autowired
	CategoryTypeJPARepository categoryTypeJPARepository;

	
	@Autowired
	ProductJPARepository productJPARepository;
	
	@Autowired
	private CustomerJPARepository customerJPARepository;

	@Autowired
	QuickMartMapper quickMartMapper;

	public void categorySave(Category category) {
		categoryJPARepository.save(category);
	}

	@Override
	public Category categoryFetch(Long categoryId) {
		Optional<Category> categoryObject = categoryJPARepository.findById(categoryId);
		return categoryObject.get();
	}

	@Override
	public List<Category> categoryFetchAll() {
		return (List<Category>) categoryJPARepository.findAll();
	}

	@Override
	public void categoryDelete(Long categoryId) {
		categoryJPARepository.deleteById(categoryId);
	}

	@Override
	public void categoryTypeSave(CategoryType categoryType) {
		categoryTypeJPARepository.save(categoryType);
	}

	@Override
	public List<CategoryType> categoryTypeFetchAll() {
		return (List<CategoryType>) categoryTypeJPARepository.findAll();
	}

	@Override
	public void productSave(Product product) {
		productJPARepository.save(product);
	}

	@Override
	public Product productFetch(Long productId) {
		Optional<Product> productObject = productJPARepository.findById(productId);
		return productObject.get();
	}

	@Override
	public void productDelete(Long productId) {
		productJPARepository.deleteById(productId);
	}

	@Override
	public CustomerDetail saveCustomer(CustomerDetail customerDetail) {
		return customerJPARepository.save(customerDetail);
	}

	@Override
	public List<Product> listProducts() {
		return (List<Product>) productJPARepository.findAll();
	}

	@Override
	public List<Category> listCategories() {
		return (List<Category>) categoryJPARepository.findAll();
	}

}
