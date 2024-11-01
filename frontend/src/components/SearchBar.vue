<template>
  <div>
    <input
        type="text"
        v-model="query"
        @input="fetchSuggestions"
        placeholder="검색어 입력"
    />
    <ul v-if="suggestions.length">
      <li v-for="suggestion in suggestions" :key="suggestion.id" @click="selectSuggestion(suggestion)">
        {{ suggestion.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      suggestions: []
    };
  },
  methods: {
    fetchSuggestions() {
      if (this.query.length > 1) { // 최소 2글자 이상 입력 시
        axios.get(`/api/search/suggestions?query=${this.query}`)
            .then(response => {
              this.suggestions = response.data; // 서버에서 받은 제안 목록
            })
            .catch(error => {
              console.error("Error fetching suggestions:", error);
            });
      } else {
        this.suggestions = [];
      }
    },
    selectSuggestion(suggestion) {
      this.query = suggestion.name; // 선택한 제안으로 검색어 업데이트
      this.suggestions = []; // 제안 목록 비우기
    }
  }
};
</script>

<style scoped>
/* 스타일 추가 */
</style>
