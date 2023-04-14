import { fetchNews, fetchSpecificArticle } from '../../api/service/newsService';
export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const FETCH_ARTICLE_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLE=_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesRequest = () => ({
    type: FETCH_ARTICLES_START
});

export const fetchArticlesSuccess = (articles) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
});

export const fetchArticleFailure = (error) => ({
    type: FETCH_ARTICLE_FAILURE,
    payload: error
});

export const fetchArticleRequest = () => ({
    type: FETCH_ARTICLE_START
});

export const fetchArticleSuccess = (articles) => ({
    type: FETCH_ARTICLE_SUCCESS,
    payload: articles
});

export const fetchArticlesFailure = (error) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: error
});

export const fetchArticles = (category,country) => {
    return async (dispatch) => {
        dispatch(fetchArticlesRequest());
        try {
            const articles = await fetchNews(category,country);
            dispatch(fetchArticlesSuccess(articles));
        } catch (error) {
            dispatch(fetchArticlesFailure(error.message));
        }
    };
};
export const fetchArticle = (article) => {
    return async (dispatch) => {
        dispatch(fetchArticleRequest());
        try {
            const article = await fetchSpecificArticle(article);
            dispatch(fetchArticleSuccess(article));
        } catch (error) {
            dispatch(fetchArticleFailure(error.message));
        }
    };
};
fetchSpecificArticle