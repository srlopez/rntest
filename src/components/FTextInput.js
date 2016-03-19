'use strict';
import React, {
  Component,
  View, TextInput,
  Text,
  PropTypes
} from 'react-native';

import styles from '../styles/styles'
import * as validators from './validators';

export default class  extends Component{
  // static contextTypes = { //Need to access context.store, otherwise undefined
  //  store: React.PropTypes.object
  // };
  constructor(props,context){
    super(props,context)
  }

  componentWillMount() {
  this.removeValidationFromContext = this.context.registerValidation( show => this.isValid(show)); //OK1
  //this.removeValidationFromContext = this.context.registerValidation( this.isValid ); //NO OK2 al remover
  }

  componentWillUnmount() {
    this.removeValidationFromContext();
  }

  static defaultProps = {
    validate: []
  }

  state = {
    errors: []
  }

  static propTypes = {
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      label: PropTypes.string,
      validate: PropTypes.arrayOf(PropTypes.string)
    }



  // Manejo de contexto
  static contextTypes = {
      update: PropTypes.func.isRequired,
      values: PropTypes.object.isRequired,
      registerValidation: PropTypes.func.isRequired
    }

  updateValue(value) {
    this.context.update(this.props.name, value);

    if (this.state.errors.length) {
      setTimeout(() => this.isValid(true), 0);
    }
   }
  // END manejo de contexto


  // onBlur = {() => this.onBlur()}
  // isValid(showErrors) { //this.isValid is not a function error
  isValid = (showErrors) => {
      const errors = this.props.validate
        .reduce((memo, currentName) =>
          memo.concat(validators[currentName](
            this.context.values[this.props.name]
          )), []);

      if (showErrors) {
        this.setState({
          errors
        });
      }
      return !errors.length;
    }

  onBlur() {
    this.isValid(true);
  }

  render(){
    //console.dir({ soy: 'this.props', ...this.props });
    //console.dir({ soy: 'context', ...this.context});
    return(

      <View>

      <TextInput
        style = {[styles.inputtext, {width:200}]}
        autoCorrect = {false}
        autoFocus = {true}
        onBlur = {() => this.onBlur()}
        onChangeText = { text => undefined }
        onFocus = { () => undefined }
        onSubmitEditing = { (event) => { this.updateValue(event.nativeEvent.text) } }
        placeholder = {this.props.placeholder}
        defaultValue = {this.context.values[this.props.name]}
      />
      <Text style={styles.normal}>{this.props.label}</Text>
      {
        this.state.errors.map((text,i) => <Text key={i}>{text}</Text>)
      }
      </View>
    )
  }
}
