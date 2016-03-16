/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict'
import { combineReducers } from 'redux'
import { actionsTypes as types, VisibilityFilters } from './todosActions'
const { SHOW_ALL } = VisibilityFilters

function textFilter(state = '', action) {
  switch (action.type) {
    case types.SET_TEXT_FILTER:
      return action.filter
    default:
      return state
  }
}


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

//Redux Initial State
let initialState = []
initialState = [
  { text: "First Item", completed: false },
  { text: "Oh!", completed: true },
]

function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case types.UPDATE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: action.text
        }),
        ...state.slice(action.index + 1)
      ]
    case types.DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case types.TOGGLE_STATUS:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: !state[action.index].completed
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todosReducer = combineReducers({
  textFilter,
  visibilityFilter,
  todos
})

export default todosReducer
