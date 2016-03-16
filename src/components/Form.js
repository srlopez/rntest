'use strict';
import React, {
  Component,
  View
} from 'react-native';

export default class  extends Component{
  // static contextTypes = { //Need to access context.store, otherwise undefined
  //  store: React.PropTypes.object
  // };

  static defaultProps = {
  }

  static propTypes: {
      children: PropTypes.node,
      values: PropTypes.object,
      update: PropTypes.func,
      reset: PropTypes.func,
      onSubmit: PropTypes.func
    }

  render(){
    // var this_props_children_WithProps = React.Children.map(this.props.children, (child) => {
    //   return React.cloneElement(child, { navigator: this.props.navigator, color: this.props.color, size: this.props.size })
    // })

    return(
      <View>
        {this.props.children}
      </View>
    )
  }
}
