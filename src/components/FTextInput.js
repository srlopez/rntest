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
  constructor(props,context){
    super(props,context)
  }

  static defaultProps = {
  }

  static propTypes = {
      name: React.PropTypes.string.isRequired,
      placeholder: React.PropTypes.string,
      label: React.PropTypes.string
    }

  static contextTypes = {
      update: React.PropTypes.func.isRequired,
      values: React.PropTypes.object.isRequired
    }

  updateValue(value) {
    this.context.update(this.props.name, value);
   }

  render(){
    //console.dir({ soy: 'this.props', ...this.props });
    //console.dir({ soy: 'context', ...this.context});
    return(

      <View>

      <TextInput
        style={[styles.inputtext, {width:200}]}
        autoCorrect={false}
        autoFocus={true}
        onChangeText={ text => undefined }
        onFocus = { () => undefined }
        onSubmitEditing = { (event) => { this.updateValue(event.nativeEvent.text) } }
        placeholder = {this.props.placeholder}
        defaultValue = {this.context.values[this.props.name]}
      />
      <Text style={styles.normal}>{this.props.label}</Text>
      </View>
    )
  }
}
