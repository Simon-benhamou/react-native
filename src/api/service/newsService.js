import axios from 'axios';

const apiKey = 'c67c19c3e08344dcb45ce1e0501e1820';
const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;

export const fetchNews = async (category, country) => {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                category,
                country,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};