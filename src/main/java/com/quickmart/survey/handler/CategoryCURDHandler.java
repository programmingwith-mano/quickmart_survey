package com.quickmart.survey.handler;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.quickmart.survey.vo.CategoryVO;

@Component("categoryCURDHandler")
@Scope("request")
public class CategoryCURDHandler {

	public void categorySave(CategoryVO categoryVO) {

	}

}
