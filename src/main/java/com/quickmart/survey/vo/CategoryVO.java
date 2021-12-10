package com.quickmart.survey.vo;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CategoryVO {

	private int categoryId;

	private String categoryName;

	private int categoryTypeId;

	private List<ProductVO> productVOList;

}
