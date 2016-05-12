'use strict';
import React, {
  Component,   PropTypes,
  TouchableOpacity,
  Text,

} from 'react-native';



export default class  extends Component{
  // static contextTypes = { //Need to access context.store, otherwise undefined
  //  store: React.PropTypes.object
  // };
  constructor(props,context){
    super(props,context)
  }

  static defaultProps = {
    label: 'Submit'
  }

  static propTypes = {
    label: PropTypes.string,
  }

  static contextTypes = {
    isFormValid: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
  }

  render(){
    return(
      <TouchableOpacity
        onPress = {this.context.submit}>
        <Text style = {{
          borderRadius: 5,
          height: 40,
          width: 120,
          fontFamily: 'Helvetica',
          fontWeight: 'bold',
          fontSize: 30,
          color: 'snow',
          backgroundColor: 'navy',
          margin: 5,
        }}
        >{this.props.label}</Text>
      </TouchableOpacity>
    )
  }

}
