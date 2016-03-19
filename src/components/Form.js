'use strict';
import React, {
  Component,
  ScrollView,
  PropTypes
} from 'react-native';

export default class  extends Component{
  // static contextTypes = { //Need to access context.store, otherwise undefined
  //  store: React.PropTypes.object
  // };



  noop = () => undefined

  static defaultProps = {
     onSubmit: this.noop
  }

  static propTypes = {
      children: PropTypes.node,
      values: PropTypes.object,
      update: PropTypes.func,
      reset: PropTypes.func,
      onSubmit: PropTypes.func
    }

  static childContextTypes = {
    update: PropTypes.func,
    reset: PropTypes.func,
    submit: PropTypes.func,
    values: PropTypes.object,
    registerValidation: PropTypes.func,
    isFormValid: PropTypes.func,
  }

  getChildContext = () => {
      return {
        update: this.props.update,
        reset: this.props.reset,
        submit: this.submit,
        values: this.props.values,
        registerValidation: this.registerValidation,
        isFormValid: this.isFormValid
      }
    }


  validations = []

  registerValidation = (isValidFunc) => {
    this.validations = [...this.validations, isValidFunc]; //OK1
    //this.validations = [...this.validations, (showErrors) => isValidFunc(showErrors)]; //No OK2 al remover
    return this.removeValidation.bind(null, isValidFunc);
  }

  removeValidation = (ref) => {
    //this.validations = without(this.validations, ref);
    this.validations = this.validations.reduce((memo, isValidFunc) => isValidFunc==ref?memo:memo.concat([isValidFunc]),[])
  }

  isFormValid = (showErrors) => {
    //this.validations.map((isValidFunc)=>{console.log(isValidFunc(showErrors));})
    //devuelve un sumatorio de todos los estados de isValid
    return this.validations.reduce((memo, isValidFunc) =>
      isValidFunc(showErrors) && memo, true);
  }

  submit = () => {
    if (this.isFormValid(true)) {
      this.props.onSubmit(Object.assign({}, this.props.values));
      this.props.reset();
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
