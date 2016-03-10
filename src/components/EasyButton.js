/**
 * React Native App
 * https://github.com/srlopez/
 *
 */

'use strict';
import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

export  class EasyRow extends Component {

  static defaultProps = {
    color: 'green',
    size: 20,
  }

  render(){
    var this_props_children_WithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { navigator: this.props.navigator, color: this.props.color, size: this.props.size })
    })

    return(
      <View style={styles.row}>
        {this_props_children_WithProps}
      </View>
    )
  }
}

export  class EasyButton extends Component {
  render(){
    const label = ' '+this.props.label+' '
    const style = {
      fontSize: this.props.size,
      backgroundColor: this.props.color
    }
    return(
      <TouchableOpacity
        onPress = {this.props.onPress}
        onLongPress = {this.props.onLongPress}>
        <Text style = {[style, styles.button, this.props.style]}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export  class EasyLink extends Component {

  static defaultProps = {
    active: false,
    label: 'Click',
    name: 'Title',
    component: null,
    passProps: null,
  }

  render(){
    const label = ' '+this.props.label+' '
    const style = {
      fontSize: this.props.size,
      color: this.props.active?'black':this.props.color
    }
    if (this.props.active) {
      return (
        <Text style = {[styles.link, style, this.props.style]}>{label}</Text>
      )
    }
    if (this.props.onPress !== undefined){
      return (
        <TouchableOpacity
          onPress={this.props.onPress}>
          <Text style = {[styles.link, style, this.props.style]}>{label}</Text>
        </TouchableOpacity>
      )
    }
    if (this.props.component == null) {
      return (
        <TouchableOpacity
          onPress={()=>{ this.props.navigator.pop() }}>
          <Text style = {[styles.link, style, this.props.style]}>{label}</Text>
        </TouchableOpacity>
      )
    }

    return(
      <TouchableOpacity
        onPress={()=>{ this.props.navigator.push({
            name: this.props.name,
            component: this.props.component,
            passProps: this.props.passProps
           })}}>
        <Text style = {[styles.link, style, this.props.style]}>{label}</Text>
      </TouchableOpacity>
    )
  }
}



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'snow',
    margin: 5,
  },
  link: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'steelblue',
    margin: 0,
  }
})
