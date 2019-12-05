import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export const configureStore = () => {
    const loggerMiddleware = createLogger();
    const middleWare = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWare, loggerMiddleware)));
    return store
} 