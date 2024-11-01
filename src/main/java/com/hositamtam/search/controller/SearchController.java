package com.hositamtam.search.controller;

import com.hositamtam.search.dto.SuggestionDto;
import com.hositamtam.search.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/search")
public class SearchController {
    @Autowired
    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping("/suggestions")
    public List<SuggestionDto> getSuggestions(@RequestParam String q) {
        return searchService.getSuggestions(q);
    }
}
