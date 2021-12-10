package com.quickmart.survey.dao.impl.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.quickmart.survey.dao.entity.Product;

@Repository
public interface ProductJPARepository extends CrudRepository<Product, Long>{

}
