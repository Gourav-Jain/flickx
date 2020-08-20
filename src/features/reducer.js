import {
    SEARCH_MOVIES_REQS,
    SEARCH_MOVIES_RESP,
    SEARCH_MOVIES_FAIL,
    ADD_TO_FAVOURITE,
    ADD_TO_WATCH_LATER,
    REMOVE_FROM_FAVOURITE,
    REMOVE_FROM_WATCH_LATER
} from "./actions";
import initialState from '../store/initialState';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES_REQS:
            return {
                ...state,
                ...action.payload
            }
        case SEARCH_MOVIES_RESP:
            const { favourites, watchLater } = state || [];
            let { searchResult } = action.payload;
            if (favourites) {
                favourites.forEach(el => {
                    const idx = searchResult.result.findIndex(i => i.id === el.id);
                    if (idx !== -1) {
                        searchResult.result[searchResult.result.findIndex(i => i.id === el.id)].fav = true;
                    }
                });
            }

            if (watchLater) {
                watchLater.forEach(el => {
                    const idx = searchResult.result.findIndex(i => i.id === el.id);
                    if (idx !== -1) {
                        searchResult.result[searchResult.result.findIndex(i => i.id === el.id)].wl = true;
                    }
                });
            }
            const newState = { ...state, ...action.payload }

            return newState;
        case SEARCH_MOVIES_FAIL:
            return { ...state, ...action.payload };
        case ADD_TO_FAVOURITE:
            return action.payload;
        case ADD_TO_WATCH_LATER:
            return action.payload;
        case REMOVE_FROM_FAVOURITE:
            return action.payload;
        case REMOVE_FROM_WATCH_LATER:
            return action.payload;

        default:
            return state;
    }
};