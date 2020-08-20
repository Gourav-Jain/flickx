import { compose, applyMiddleware } from "redux";

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ middleware = [], enhancers = [] } = {}) => {
    //const reduxLogger = createLogger();

    return composeWithDevTools(applyMiddleware(...middleware), ...enhancers);
};