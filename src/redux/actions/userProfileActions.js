export const addToHistory = (article) => ({
    type: 'ADD_TO_HISTORY',
    payload: article,
});

export const updateProfile = (profile) => ({
    type: 'UPDATE_PROFILE',
    payload: profile,
});
