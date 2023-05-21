import axios from 'axios';

const apiKey = 'c67c19c3e08344dcb45ce1e0501e1820';

console.log(process.REACT_APP_NEWS_API_KEY)
const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${'c67c19c3e08344dcb45ce1e0501e1820'}`;

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


export const translateArticles = async (article,language) => {
    try {
        const response = await axios.post('http://localhost:8080/translateAIArticles', {
            params: {
                article,
                language,
            },
        });

        return response;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}