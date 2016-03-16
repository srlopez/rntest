/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict'
import { combineReducers } from 'redux'
import { actionsTypes as types } from './formActions'


//Redux Initial State
let initialState = {
  values: {}
};

function formReducer(state = initialState, action) {
  switch (action.type) {

    case types.FORM_UPDATE_VALUE:
        return Object.assign({}, state, {
          values: Object.assign({}, state.values, {
            [action.name]: action.value
          })
        });

    case types.FORM_RESET:
      return initialState;

    default:
      return state
  }
}

export default formReducer
