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

import ToDoEdit from './ToDoEdit'

export default class extends Component {
  constructor(props){
    super(props);
    // console.dir(this.props.todosState);
    console.dir(this.props.todosActions);
  }

  showMenu(rowData, rowID) {
    console.dir(this.props);
    Alert.alert(
        'Items Actions', rowData.text,
          [
              {text: 'Delete', onPress: () =>
                  this.props.todosActions.deleteToDo(rowID)},
              {text: 'Edit', onPress: () => {
                  this.props.navigator.push({
                      name: rowData && rowData.txt || 'New Item',
                      component: ToDoEdit,
                      passProps: {item: rowData, id: rowID}
                      })
                  }},
              {text: 'Cancel'}
          ]
      );
  }


  render() {
    const { todos, visibilityFilter } = this.props.todosState;
    const { addToDo, toggleStatus, setVisibilityFilter } = this.props.todosActions;


    return (
      <View style={styles.container}>
      <Text style={styles.textSuper}>TODOLIST</Text>
      <ToDoList todos={todos} onPress={toggleStatus} onLongPress={this.showMenu}/>

      <TouchableHighlight
        onPress={() => {
          toggleStatus(2)
        }}
      >
        <Text>toggle 2</Text>
      </TouchableHighlight>


      <TouchableHighlight
        onPress={() => {
          addToDo( 'ToDo #'+Math.floor((Math.random() * 100) + 1))
        }}
      >
      <Text>add</Text>
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

/**

*/
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  render() {
  const dataSource = this.ds.cloneWithRows(this.props.todos);

  return (
    <View style={{flex:1}}>
        <ListView style={{flex:1}}
          dataSource={dataSource}
          renderRow={(rowData, sectionID, rowID) =>
            <ToDoListItem id={rowID} item={rowData} {...this.props}/>
          }
        />
    </View>
    );
    }
}

class ToDoListItem extends Component {
  render() {
    const item = this.props.item;
    const id = this.props.id;
    return (
      <View>
        <TouchableHighlight
          onPress={() => { this.props.onPress(id) }}
          onLongPress={() => { this.props.onLongPress(item,id) }}>
          <View style={styles.container0}>
            <Text
              style={[styles.txt, item.completed && styles.completed]}>
              {id}. {item.text}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
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
