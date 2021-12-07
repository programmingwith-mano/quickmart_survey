package com.quickmart.survey.dao.impl.repositories;

import org.springframework.data.repository.CrudRepository;

import com.quickmart.survey.dao.entity.Category;

public interface CategoryJPARepository extends CrudRepository<Category, Long> {

}
