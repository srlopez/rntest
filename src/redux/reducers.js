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
import todos from './todosReducer'
import counter from './counterReducer'
import data from './dataReducer'

const rootReducer = combineReducers({
  todos,
  counter,
  data
})

export default rootReducer;
