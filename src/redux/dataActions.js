/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict'

//Actions
export const actionsTypes = {
  REQUEST_DATA: 'REQUEST_DATA',
  RECEIVE_DATA: 'RECEIVE_DATA'
}

//Actions creators
export const actionsCreators = {
  requestData: (): Object => ({
      type: actionsTypes.REQUEST_DATA
    }),
  receiveData: (data: Object): Object => ({
      type: actionsTypes.RECEIVE_DATA,
      data
    }),
}

//It's not a creator but this is good place to define
export const fetchData = (): Function => {
  return (dispatch) => {
    dispatch(actionsCreators.requestData());
    return setTimeout(() => {
      const data = {message: "Hello"};
      dispatch(actionsCreators.receiveData(data));
    }, 1000);
  };
};
