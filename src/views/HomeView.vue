<template>
  <div class="container mx-auto p-6">
    <input
      v-model="searchQuery"
      placeholder="Search news"
      @input="searchNews"
      class="w-full p-2 mb-6 border border-gray-300 rounded-lg"
    />

    <div v-if="loading">
      <SkeletonLoader v-for="n in 5" :key="n" />
    </div>

    <div v-else class="grid grid-cols-4 gap-4">
      <div
        v-if="articles[1]"
        @click="openArticle(articles[1])"
        class="col-span-2 row-span-2 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg"
      >
        <img
          :src="articles[1].urlToImage"
          class="w-full h-64 object-cover rounded-t-lg"
          alt="news image"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{ articles[1].title }}
          </h2>
          <p class="text-gray-700 mb-3 text-pretty">{{ articles[1].description }}</p>
          <p class="text-gray-500">{{ formattedDate(articles[1].publishedAt) }} - {{ articles[1].author }}</p>
        </div>
      </div>

      <div
        v-for="article in articles.slice(2, 8)"
        :key="article.url"
        @click="openArticle(article)"
        class="bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg"
      >
        <img
          :src="article.urlToImage"
          class="w-full h-32 object-cover rounded-t-lg"
          alt="news image"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-1 text-pretty">
            {{ article.title }}
          </h3>
          <p class="text-sm text-gray-500">{{ formattedDate(article.publishedAt) }} - {{ article.author }}</p>
        </div>
      </div>
      <div
        v-if="articles[10]"
        @click="openArticle(articles[10])"
        class="col-span-2 row-span-2 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg"
      >
        <img
          :src="articles[10].urlToImage"
          class="w-full h-64 object-cover rounded-t-lg"
          alt="news image"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{ articles[10].title }}
          </h2>
          <p class="text-gray-700 mb-3">{{ articles[10].description }}</p>
          <p class="text-gray-500">{{ formattedDate(articles[10].publishedAt) }} - {{ articles[10].author }}</p>
        </div>
      </div>
      <div
        v-for="article in articles.slice(11, 17)"
        :key="article.url"
        @click="openArticle(article)"
        class="bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg"
      >
        <img
          :src="article.urlToImage"
          class="w-full h-32 object-cover rounded-t-lg"
          alt="news image"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-1">
            {{ article.title }}
          </h3>
          <p class="text-sm text-gray-500">{{ formattedDate(article.publishedAt) }} - {{ article.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import SkeletonLoader from '../components/SkeletonLoader.vue';
import { Article } from '../store';

export default {
  components: { SkeletonLoader },
  setup() {
    const store = useStore();
    const searchQuery = ref('');
    const loading = ref(true);

    const articles = computed(() => store.getters.articles);

    const searchNews = () => {
      loading.value = true;
      store.dispatch('fetchArticles', searchQuery.value || 'latest')
        .finally(() => {
          loading.value = false;
        });
    };

    const openArticle = (article: Article) => {
      store.dispatch('addReadArticle', article);
      window.open(article.url, '_blank');
    };

    const formattedDate = (date: string) => {
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(date).toLocaleDateString('id-ID', options);
    };

    onMounted(() => {
      searchNews();
    });

    return { searchQuery, articles, loading, searchNews, openArticle, formattedDate };
  }
};
</script>

<style scoped>

</style>
