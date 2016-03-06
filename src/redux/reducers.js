/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);


// Reducers
import todo from './todoReducer'
import counter from './counterReducer'

const rootReducer = combineReducers({
  todo,
  counter
})

export default rootReducer;
