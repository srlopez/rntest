'use strict';
import React, {
  Component,
  View, TextInput,
  Text,
} from 'react-native';

import styles from '../styles/styles'

export default class  extends Component{
  // static contextTypes = { //Need to access context.store, otherwise undefined
  //  store: React.PropTypes.object
  // };

  static defaultProps = {
  }

  static propTypes: {
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      label: PropTypes.string
    }

  static contextTypes: {
      update: PropTypes.func.isRequired,
      values: PropTypes.object.isRequired
    }

  updateValue  = (value) => {
     this.context.update(this.props.name, value);
   }

  render(){
    console.dir(this.props);
    return(
      <View style={styles.container}>
      <Text style={styles.normal}>{this.props.label}</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => console.log(text)}
        placeholder={this.props.placeholder}
        value={this.context.values[this.props.name]}
      />
      </View>
    )
  }
}
