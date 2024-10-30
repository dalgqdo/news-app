import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ReadHistoryView from '@/views/ReadHistoryView.vue';
import SearchComponent from '@/components/SearchComponent.vue';

const routes = [
  { path: '/', component: HomeView, name: '' },
  { path: '/read-history', component: ReadHistoryView, name: 'Read-History' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
