import { createStore } from 'vuex';
import { fetchNews } from '../api/newsApi'; 

export interface Article {
    name: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

export default createStore({
    state: {
        articles: [] as Article[],
        readArticles: JSON.parse(localStorage.getItem('readArticles') || '[]') as Article[],
    },
    mutations: {
        setArticles(state, articles: Article[]) {
            state.articles = articles;
        },
        addReadArticle(state, article: Article) {
            state.readArticles.push(article);
            localStorage.setItem('readArticles', JSON.stringify(state.readArticles));
        }
    },
    actions: {
        async fetchArticles({ commit }, query: string) {
            const articles = await fetchNews(query);
            commit('setArticles', articles);
        },
        addReadArticle({ commit }, article: Article) {
            commit('addReadArticle', article);
        }
    },
    getters: {
        articles: (state) => state.articles,
        readArticles: (state) => state.readArticles,
    }
});
