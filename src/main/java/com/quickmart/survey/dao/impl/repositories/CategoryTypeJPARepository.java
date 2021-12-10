package com.quickmart.survey.dao.impl.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.quickmart.survey.dao.entity.CategoryType;

@Repository
public interface CategoryTypeJPARepository extends CrudRepository<CategoryType, Long>{

}
