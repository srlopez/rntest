/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict'
import { combineReducers } from 'redux'
import { actionsTypes as aT, VisibilityFilters } from './todoActions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case aT.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case aT.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case aT.COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoReducer = combineReducers({
  visibilityFilter,
  todos
})

export default todoReducer
