package com.quickmart.survey.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.quickmart.survey.dao.QuickMartDAO;
import com.quickmart.survey.dao.entity.Category;
import com.quickmart.survey.dao.entity.CategoryType;
import com.quickmart.survey.dao.entity.CustomerDetail;
import com.quickmart.survey.dao.entity.Product;
import com.quickmart.survey.mapper.QuickMartMapper;
import com.quickmart.survey.vo.CategoryTypeVO;
import com.quickmart.survey.vo.CategoryVO;
import com.quickmart.survey.vo.ProductVO;

@Component("quickMartService")
public class QuickMartServiceImpl implements QuickMartService {

	@Autowired
	QuickMartDAO quickMartDAO = null;

	@Autowired
	private QuickMartMapper quickMartMapper;

	public void categorySave(CategoryVO categoryVO) {
		Category category = quickMartMapper.convertCategoryVOToEntity(categoryVO);
		quickMartDAO.categorySave(category);
	}

	@Override
	public CategoryVO categoryFetch(Long categoryId) {
		Category category = quickMartDAO.categoryFetch(categoryId);
		return quickMartMapper.convertCategoryEntityToVO(category);
	}

	@Override
	public List<CategoryVO> categoryFetchAll() {
		List<Category> categoryList = quickMartDAO.categoryFetchAll();
		return quickMartMapper.convertToCategoryVOList(categoryList);
	}

	@Override
	public void categoryDelete(Long categoryId) {
		quickMartDAO.categoryDelete(categoryId);
	}

	@Override
	public void categoryTypeSave(CategoryTypeVO categoryTypeVO) {
		CategoryType categoryType = quickMartMapper.convertCategoryTypeVOToEntity(categoryTypeVO);
		quickMartDAO.categoryTypeSave(categoryType);
	}

	@Override
	public List<CategoryTypeVO> categoryTypeFetchAll() {
		List<CategoryType> categoryTypeList = quickMartDAO.categoryTypeFetchAll();
		return quickMartMapper.convertToCategoryTypeVOList(categoryTypeList);
	}

	@Override
	public void productSave(ProductVO productVO) {
		Product product = quickMartMapper.convertProductVOToEntity(productVO);
		quickMartDAO.productSave(product);
	}

	@Override
	public ProductVO productFetch(Long productId) {
		Product product = quickMartDAO.productFetch(productId);
		return quickMartMapper.convertProductEntityToVO(product);
	}

	@Override
	public void productDelete(Long productId) {
		quickMartDAO.productDelete(productId);
	}

	@Override
	public CustomerDetail saveCustomer(CustomerDetail customerDetail) {
		return quickMartDAO.saveCustomer(customerDetail);
	}

	@Override
	public List<ProductVO> listProducts() {
		List<Product> productList = quickMartDAO.listProducts();
		return quickMartMapper.convertToProductVOList(productList);
	}

	@Override
	public List<CategoryVO> listCategories() {
		List<Category> categoryList = quickMartDAO.listCategories();
		return quickMartMapper.convertToCategoryVOList(categoryList);
	}

}