package com.hositamtam.search.service;

import com.hositamtam.search.dto.SuggestionDto;

import java.util.List;

public interface SearchService {
    List<SuggestionDto> getSuggestions(String query);
}
