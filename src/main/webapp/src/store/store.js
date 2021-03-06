import { createStore, applyMiddleware } from "redux";
import thunkMiddleware  from "redux-thunk";
import { createLogger } from "redux-logger";
import rootreducer from '../reducer/rootreducer'

const loggerMiddleware = createLogger();

const store = createStore(
    rootreducer, applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;