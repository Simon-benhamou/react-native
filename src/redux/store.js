import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers/newsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import userProfileReducer from './reducers/userProfileReducer';
const rootReducer = combineReducers({
    news: newsReducer,
    userProfile: userProfileReducer,

});


const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
