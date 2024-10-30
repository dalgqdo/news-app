<template>
  <h1 class="p-5 font-semibold">NEWS HISTORY</h1>
  <div class="grid grid-cols-4 gap-4 p-4 pt-0">
  <div
        div v-for="article in readArticles" :key="article.url"
        class="bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg"
      >
        <img
          :src="article.urlToImage"
          class="w-full h-32 object-cover rounded-t-lg"
          alt="read article image"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-1">
            {{ article.title }}
          </h3>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const readArticles = computed(() => store.getters.readArticles);
  
      return { readArticles };
    }
  };
  </script>
  