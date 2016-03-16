/**
 * action types
 */
export const actionsTypes = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_STATUS: 'TOGGLE_STATUS',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  SET_TEXT_FILTER: 'SET_TEXT_FILTER'
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
  addToDo: (text) => ({
    type: actionsTypes.ADD_TODO,
    text
  }),
  updateToDo: (index) => ({
    type: actionsTypes.UPDATE_TODO,
    index,
    text
  }),
  deleteToDo: (index) => ({
    type: actionsTypes.DELETE_TODO,
    index
  }),
  toggleStatus: (index) => ({
    type: actionsTypes.TOGGLE_STATUS,
    index
  }),
  setVisibilityFilter: (filter) => ({
    type: actionsTypes.SET_VISIBILITY_FILTER,
    filter
  }),
  setTextFilter: (filter) => ({
    type: actionsTypes.SET_TEXT_FILTER,
    filter
  })
}
