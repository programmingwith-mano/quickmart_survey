package com.quickmart.survey.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.quickmart.survey.dao.entity.Category;
import com.quickmart.survey.dao.entity.CategoryType;
import com.quickmart.survey.dao.entity.CustomerDetail;
import com.quickmart.survey.dao.entity.CustomerTransaction;
import com.quickmart.survey.dao.entity.Product;
import com.quickmart.survey.vo.CategoryTypeVO;
import com.quickmart.survey.vo.CategoryVO;
import com.quickmart.survey.vo.CustomerDetailVO;
import com.quickmart.survey.vo.CustomerTransactionVO;
import com.quickmart.survey.vo.ProductVO;

@Mapper(componentModel = "spring")
public interface QuickMartMapper {

	CategoryTypeVO convertCategoryTypeEntityToVO(CategoryType categoryType);

	CategoryType convertCategoryTypeVOToEntity(CategoryTypeVO categoryTypeVO);

	CategoryVO convertCategoryEntityToVO(Category category);

	Category convertCategoryVOToEntity(CategoryVO categoryVO);
	
	ProductVO convertProductEntityToVO(Product product);
	
	Product convertProductVOToEntity(ProductVO productVO);
	
	List<CategoryTypeVO> convertToCategoryTypeVOList(List<CategoryType> categoryTypeList);
	
	List<CategoryVO> convertToCategoryVOList(List<Category> categoryList);
	
	List<ProductVO> convertToProductVOList(List<Product> productList);
	
	CustomerDetailVO convertCustomerDetailEntityToVO(CustomerDetail customerDetail);
	
	CustomerDetail convertCustomerDetailVOToEntity(CustomerDetailVO customerDetailVO);
	
	List<CustomerTransaction> convertToCustomerTransactionList(List<CustomerTransactionVO> customerTransactionVOList);
	
	List<CustomerTransactionVO> convertToCustomerTransactionVOList(List<CustomerTransaction> customerTransactionList);
	
	
}
