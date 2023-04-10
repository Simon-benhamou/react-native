const initialState = {
    history: [],
    profile: {},
};

export default function userProfileReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_HISTORY':
            return {
                ...state,
                history: [...state.history, action.payload],
            };
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: action.payload,
            };
        default:
            return state;
    }
}
