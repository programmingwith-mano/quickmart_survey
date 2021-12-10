import { combineReducers } from "redux";

import customerreducer from './customerreducer'

const rootreducer = combineReducers({
    customer : customerreducer
});

export default rootreducer;