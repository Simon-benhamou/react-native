import {
    FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE, FETCH_ARTICLE_START, FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE, RESET_ARTICLE
} from '../actions/newActions';

const initialState = {
    articles: [],
    loading: false,
    error: null,
    region: 'fr',
    category:'technology',
    current:{}
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_START:
            return { ...state, loading: true, error: null };

        case FETCH_ARTICLES_SUCCESS:
            return { ...state, loading: false, articles: action.payload };

        case FETCH_ARTICLES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case FETCH_ARTICLE_START:
            return { ...state, loading: true, error: null };

        case FETCH_ARTICLE_SUCCESS:
            console.log(action)
            return { ...state, loading: false, current: action.payload };

        case FETCH_ARTICLE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case RESET_ARTICLE: 
            return { ...state, loading: false, current: {}, error: null };

        default:
            return state;
    }
};

export default newsReducer;
