/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
//Actions
export const actionsTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

//Actions creators
export const actionsCreators = {
  increment: () => ({ type: actionsTypes.INCREMENT }),
  decrement: () => ({ type: actionsTypes.DECREMENT })
}

// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'
// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })
