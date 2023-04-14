import {
    FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE, FETCH_ARTICLE_START, FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE
} from '../actions/newActions';

const initialState = {
    articles: [],
    loading: false,
    error: null,
    region: 'us',
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
            return { ...state, loading: false, current: action.payload };

        case FETCH_ARTICLE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default newsReducer;
