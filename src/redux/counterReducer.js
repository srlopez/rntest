/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
//import { INCREMENT, DECREMENT } from './counterActions'
import { actionsTypes as a } from './counterActions'

//Redux Initial State
const initialState = {
  counter: 0
}

//Reducer
const counter = (state = initialState, action = {}) => {
  let delta = 1
  switch (action.type) {
  case a.DECREMENT: delta = -1;
  case a.INCREMENT:
    return Object.assign({}, state, { counter: state.counter+delta })
  default:
    return state
  }
}

export default counter
