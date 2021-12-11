package com.quickmart.survey.dao.impl.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quickmart.survey.dao.entity.CustomerDetail;

@Repository
public interface CustomerJPARepository extends JpaRepository<CustomerDetail, Long> {

}
