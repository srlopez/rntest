/**
 * action types
 */
export const actionsTypes = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

/**
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * action creators
 */
export const actionsCreators = {
  addTodo: (text) => ({ type: ADD_TODO, text }),
  completeTodo: (index) => ({ type: COMPLETE_TODO, index }),
  setVisibilityFilter: (filter) => ({ type: SET_VISIBILITY_FILTER, filter })
}
