
import { combineReducers } from "redux";

// Features
import { reducer as searchMovies } from "../features/reducer";


export default combineReducers({ searchMovies, config: (state = {}) => state });;