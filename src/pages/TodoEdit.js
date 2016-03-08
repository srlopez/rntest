/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict'
import React, {
  Navigator,
  Component,
  View, ListView, ScrollView,
  Text, TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Alert
} from 'react-native';

export default class extends Component {
  constructor(){
    super();
    console.dir(this.props);
  }


  render() {
    const item = this.props.item;
    const id = this.props.id;

    return (
      <View style={styles.container}>
      <Text style={styles.textSuper}>TODO ITEM</Text>
      <Text >{item.text}</Text>

      <TouchableHighlight
        onPress={() => {
          toggleStatus(id)
        }}
      >
        <Text>toggle</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          deleteToDo(id)
        }}
      >
        <Text>delete</Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={()=>{
        this.props.navigator.pop()
      }}>
        <Text style={styles.textNormal}>{'<'}Back{'>'}</Text>
      </TouchableOpacity>

    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textSuper: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  textNormal: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container0: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
  },

  button: {
      height: 36,
      backgroundColor: '#48BBEC',
      alignSelf: 'stretch',
      justifyContent: 'center'
  },

  saveButton: {
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
  },

  newButton: {
      marginBottom: 0,
      borderRadius: 0,
  },

  todo: {
      marginTop: 100,
      flex: 1,
      padding: 10,
  },

  txt: {
      fontSize: 18,
      marginLeft: 5,
      marginTop: 2,
      color: '#222222',
  },

  completed: {
      color: '#cccccc'
  },

  hr: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      height: 1,
      marginLeft: 0,
      marginRight: 0,
  }

});
