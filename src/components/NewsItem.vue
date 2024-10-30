<template>
    <div class="news-item" @click="markAsRead">
      <img :src="news.urlToImage" alt="News Image" />
      <h3>{{ news.title }}</h3>
      <p>{{ news.author }} - {{ formattedDate }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    props: {
      news: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const store = useStore();
      const formattedDate = computed(() => {
        const date = new Date(props.news.publishedAt);
        return date.toLocaleDateString("id-ID", {
          weekday: 'short', day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit'
        });
      });
  
      const markAsRead = () => {
        store.commit('addToReadHistory', props.news);
        window.open(props.news.url, '_blank');
      };
  
      return { formattedDate, markAsRead };
    },
  });
  </script>
  