import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();

export default (initialState = {}) => {
    createStore(
        combineReducers({
            
        }),
        initialState,
        applyMiddleware(logger)
    )
}