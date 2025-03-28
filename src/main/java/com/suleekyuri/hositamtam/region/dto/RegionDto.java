package com.suleekyuri.hositamtam.region.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegionDto {
    private Long userId;       // 사용자의 ID
    private String aptId;      // 아파트 ID
    private Boolean isFavorite; // 즐겨찾기 여부

    // 아파트 정보 추가
    private String aptName;    // 아파트 이름
    private String local1;     // 지역1
    private String local2;     // 지역2
    private String local3;     // 지역3
    private int maxSalesPrice; // 최고 가격
    private int totalHome;     // 총세대수
    private double parkingPerHome; // 가구당 주차대수
    private String image;
    private String lat;
    private String lng;

    // 필터링 조건 추가
    private Integer areaMin;   // 최소 평형
    private Integer areaMax;   // 최대 평형
    private Integer priceMin;  // 최소 가격
    private Integer priceMax;  // 최대 가격
    private String type;       // 아파트 유형 (매매, 전세, 월세 등)
}
