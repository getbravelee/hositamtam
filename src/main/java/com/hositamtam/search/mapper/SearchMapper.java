package com.hositamtam.search.mapper;

import com.hositamtam.search.dto.SuggestionDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SearchMapper {
    List<SuggestionDto> findByLocationContaining(String query);

}
