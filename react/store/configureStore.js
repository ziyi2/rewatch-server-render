import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

const  loggerMiddleware = createLogger();


export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,loggerMiddleware)
    );

    //if (module.hot) {//
    //    // Enable Webpack hot module replacement for reducers
    //    module.hot.accept('../reducers', () => {
    //        const nextRootReducer = require('../reducers').default
    //        store.replaceReducer(nextRootReducer)
    //    })
    //}

    return store
}
