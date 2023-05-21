import { fetchNews, fetchSpecificArticle } from '../../api/service/newsService';
export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const FETCH_ARTICLE_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const RESET_ARTICLE = 'RESET_ARTICLE'

// get all 
export const fetchArticlesRequest = () => ({
    type: FETCH_ARTICLES_START
});

export const fetchArticlesSuccess = (articles) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
});


export const fetchArticlesFailure = (error) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: error
});
export const reset = () => ({
    type: RESET_ARTICLE
})
export const fetchArticles = (category, country) => {
    return async (dispatch) => {
        dispatch(fetchArticlesRequest());
        try {
            const articles = await fetchNews(category, country);
            dispatch(fetchArticlesSuccess(articles));
        } catch (error) {
            dispatch(fetchArticlesFailure(error.message));
        }
    };
};
