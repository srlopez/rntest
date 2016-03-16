'use strict';
import React, {
  Component,
  ScrollView
} from 'react-native';

export default class  extends Component{
  // static contextTypes = { //Need to access context.store, otherwise undefined
  //  store: React.PropTypes.object
  // };

  static defaultProps = {
  }

  static propTypes = {
      children: React.PropTypes.node,
      values: React.PropTypes.object,
      update: React.PropTypes.func,
      reset: React.PropTypes.func,
      onSubmit: React.PropTypes.func
    }

  static childContextTypes = {
    update: React.PropTypes.func,
    reset: React.PropTypes.func,
    submit: React.PropTypes.func,
    values: React.PropTypes.object
  }

  getChildContext = () => {
      return {
        update: this.props.update,
        reset: this.props.reset,
        submit: this.submit,
        values: this.props.values
      }
    }

  render(){
    // var this_props_children_WithProps = React.Children.map(this.props.children, (child) => {
    //   return React.cloneElement(child, { navigator: this.props.navigator, color: this.props.color, size: this.props.size })
    // })
    return(
      <ScrollView>
        {this.props.children}
      </ScrollView>
    )
  }
}
