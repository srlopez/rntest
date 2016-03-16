/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict'
import { connect } from "react-redux"
import { bindActionCreators, bindSte} from 'redux'

import { actionsCreators as counterActions } from './redux/counterActions'
import { actionsCreators as todosActions } from './redux/todosActions'
import { actionsCreators as dataActions, fetchData } from './redux/dataActions'
import { actionsCreators as formActions } from './redux/formActions'

//Wrapper to bind state and actions to props on Presentational Component
// const connectComponent = (component) => connect(
//   (state) => ({
//     counter: state.counter
//   }),
//   (dispatch) => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//   })
// )(component)

export default function (component) {
  return connect(
    //state => state,
    (state) => ({  // state.xxxx <-- definido en ./store.js (index,js?)
      formState: state.form,
      todosState: state.todos,
      counterState: state.counter,
      dataState: state.data,
    }),
    //mapDispatchToProps
    (dispatch) => ({
      formActions:  bindActionCreators(formActions, dispatch),
      todosActions: bindActionCreators(todosActions, dispatch),
      counterActions: bindActionCreators(counterActions, dispatch),
      //ff: () => dispatch(fetchData()),  //pasamos directamente una funcion
      dataActions: bindActionCreators({ fetchData, ...dataActions }, dispatch)
    })
  )(component)
}
