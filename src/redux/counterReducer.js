/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import { actionsTypes as types} from './counterActions'

//Redux Initial State
const initialState = {
  counter: 0
}

//Reducer
const counterReducer = (state = initialState, action = {}) => {
  let delta = 1
  switch (action.type) {
  case types.DECREMENT: delta = -1;
  case types.INCREMENT:
    return Object.assign({}, state, { counter: state.counter+delta })
  default:
    return state
  }
}

export default counterReducer
