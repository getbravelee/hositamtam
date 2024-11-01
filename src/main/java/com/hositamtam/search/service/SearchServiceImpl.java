package com.hositamtam.search.service;

import com.hositamtam.search.dto.SuggestionDto;
import com.hositamtam.search.mapper.SearchMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {
    @Autowired
    private final SearchMapper searchMapper;

    public SearchServiceImpl(SearchMapper searchMapper) {
        this.searchMapper = searchMapper;
    }

    @Override
    public List<SuggestionDto> getSuggestions(String query) {
        return searchMapper.findByLocationContaining(query);
    }
}
