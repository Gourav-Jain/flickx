/**
 * Action Types
 */
export const SEARCH_MOVIES_REQS = "SEARCH_MOVIES_REQS";
export const SEARCH_MOVIES_RESP = "SEARCH_MOVIES_RESP";
export const SEARCH_MOVIES_FAIL = "SEARCH_MOVIES_FAIL";

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const ADD_TO_WATCH_LATER = "ADD_TO_WATCH_LATER";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const REMOVE_FROM_WATCH_LATER = "REMOVE_FROM_WATCH_LATER";

/**
 * Action Creator
 */
export const setSearchMoviesRequest = payload => ({ type: SEARCH_MOVIES_REQS, payload });
export const setSearchMoviesResponse = payload => ({ type: SEARCH_MOVIES_RESP, payload });
export const setSearchMoviesFailer = payload => ({ type: SEARCH_MOVIES_FAIL, payload });

export const setAddToFavourites = payload => ({ type: ADD_TO_FAVOURITE, payload });
export const setAddToWatchLater = payload => ({ type: ADD_TO_WATCH_LATER, payload });
export const setRemoveFromFavourite = payload => ({ type: REMOVE_FROM_FAVOURITE, payload });
export const setRemoveFromWatchLater = payload => ({ type: REMOVE_FROM_WATCH_LATER, payload });