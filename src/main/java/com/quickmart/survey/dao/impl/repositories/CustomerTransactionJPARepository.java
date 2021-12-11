package com.quickmart.survey.dao.impl.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.quickmart.survey.dao.entity.CustomerTransaction;

@Repository
public interface CustomerTransactionJPARepository extends CrudRepository<CustomerTransaction, Long>{

}
