/**
 * action types
 */
export const actionsTypes = {
  FORM_UPDATE_VALUE: 'FORM_UPDATE_VALUE',
  FORM_RESET: 'FORM_RESET',
}

/**
 * action creators
 */
export const actionsCreators = {
  update: (name, value) => ({
      type: actionsTypes.FORM_UPDATE_VALUE,
      name,
      value
  }),

  reset: () => ({
      type: actionsTypes.FORM_RESET
  }),
}
