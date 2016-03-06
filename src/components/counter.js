'use strict';
import React, {
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Counter extends Component{
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(this.props.route.name+' shouldComponentUpdate returns '+ (nextProps.counter !== this.props.counter) +' '+formatTime(new Date()));
  //   return nextProps.counter !== this.props.counter;
  // }


  // static contextTypes = { //Need to access context.store, otherwise undefined
  //  store: React.PropTypes.object
  // };

  constructor(props){
    super(props);
    // console.log('component counter');
    // console.dir(this.props);
  }

  render() {
    const counter = this.props.state.counter;
    const increment = this.props.actions.increment;
    const decrement = this.props.actions.decrement;
    return (
      <View>
        <Text style={{fontSize: 40}}>{this.props.name}</Text>
        <Text style={{fontSize: 100}}>{counter}</Text>
        <TouchableOpacity onPress={()=>{increment()}} ><Text style={{fontSize: 40}}>{'<'}+{'>'}</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{decrement()}} ><Text style={{fontSize: 40}}>{'<'}-{'>'}</Text></TouchableOpacity>
        <Text> </Text>
      </View>
    )
  }
}
