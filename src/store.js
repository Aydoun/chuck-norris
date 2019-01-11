import { createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxLogger from 'redux-logger';
import rootReducer from './reducers';
import mySaga from './sagas';

const initialState = {}
const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(reduxLogger);
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer,  initialState, enhancer);
sagaMiddleware.run(mySaga);

export default store;
