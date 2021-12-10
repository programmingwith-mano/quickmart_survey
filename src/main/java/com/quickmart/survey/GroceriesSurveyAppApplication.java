package com.quickmart.survey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.quickmart.survey.dao.impl.QuickMartDAOImpl;
import com.quickmart.survey.mapper.QuickMartMapper;

@SpringBootApplication
public class GroceriesSurveyAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroceriesSurveyAppApplication.class, args);
	}

}
