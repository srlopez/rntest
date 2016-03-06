/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import { connect } from "react-redux";
import { bindActionCreators, bindSte} from 'redux';

import { actionsCreators as counterActions } from './redux/counterActions';


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
    (state) => ({
      //todos: state.todos
      counterState: state.counter
    }),
    //mapDispatchToProps
    (dispatch) => ({
      //todoActions: bindActionCreators(todoActions, dispatch),
      counterActions: bindActionCreators(counterActions, dispatch)
    })
  )(component)
}
