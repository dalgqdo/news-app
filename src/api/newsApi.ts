import axios from 'axios';

const API_KEY = '42e85737cdcf4a95ad6654174df170de';
const BASE_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2024-09-30&sortBy=publishedAt';

export const fetchNews = async (query = 'latest') => { // Default to 'latest'
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                q: query,
                apiKey: API_KEY,
            }
        });
        return response.data.articles;
    } catch (error: unknown) {
        const err = error as Error;  // Assert error as type Error
        console.error('Error fetching news:', err.message);
        throw err;
    }
};
