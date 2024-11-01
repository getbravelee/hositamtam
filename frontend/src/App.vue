<template>
  <div id="app">
    <header>
      <h1>내 애플리케이션 제목</h1>
      <SearchBar />
    </header>
    <main>
      <!-- 다른 컴포넌트나 내용 추가 -->
    </main>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';

export default {
  components: {
    SearchBar
  }
};
</script>

<style>
/* 스타일 추가 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
