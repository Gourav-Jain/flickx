
import { createStore, compose } from "redux";


import initialState from "./initialState";
import rootReducer from './reducers'
import devEnhancer from "./config.dev";


const composeEnhancers =
    process.env.NODE_ENV === "development" ? devEnhancer : compose;

export default () => {
    const preloadedState = { ...initialState };
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers({})
    );
    return store;
};