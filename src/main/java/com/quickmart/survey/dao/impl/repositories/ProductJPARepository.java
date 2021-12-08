package com.quickmart.survey.dao.impl.repositories;

import org.springframework.data.repository.CrudRepository;

import com.quickmart.survey.dao.entity.Product;

public interface ProductJPARepository extends CrudRepository<Product, Long>{

}
