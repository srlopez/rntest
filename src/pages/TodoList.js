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


import { EasyRow, EasyButton, EasyLink } from '../components/EasyButton'
import ToDoEdit from './ToDoEdit'

export default class extends Component {
  constructor(props){
    super(props);
    // console.dir(this.props.todosState);
    // console.dir(this.props.todosActions);
    this._plus = this._plus.bind(this);
    this._minus = this._minus.bind(this);
  }

  state = { idx: 0 }
  _plus() { this.setState( { idx: (this.state.idx+1) % this.props.todosState.todos.length } ) }
  _minus() { this.setState( { idx: (this.state.idx+1) % this.props.todosState.todos.length } ) }


  showMenu(rowData, rowID) {
    Alert.alert(
        '#'+rowID+'-'+rowData.text,
        'choose an action',
          [
              {text: 'Delete', onPress: () =>
                  this.deleteItem(rowID)},
              {text: 'Edit', onPress: () => {
                  this.props.navigator.push({
                      name: rowData && rowData.txt || 'New Item',
                      component: ToDoEdit,
                      passProps: { item: rowData, id: rowID }
                      })
                  }},
              {text: 'Cancel'}
          ]
      );
  }

  deleteItem(idx) {
          this.props.todosActions.deleteToDo(idx)
      }

  render() {
    const { todos, visibilityFilter } = this.props.todosState;
    const { addToDo, deleteToDo, toggleStatus, setVisibilityFilter } = this.props.todosActions;


    return (
      <View style={styles.container}>
      <Text style={styles.textSuper}>TODOLIST</Text>

      <EasyRow color='darkcyan' size={20}>
        <EasyButton label={'#'+this.state.idx} style={{ backgroundColor: 'coral' }} />
        <EasyButton label='[+]' onPress={() => {this._plus()}} />
        <EasyButton label='[-]' onPress={() => {this._minus()}} />
        <EasyButton label='update' onPress={() => {toggleStatus(this.state.idx)}} />
        <EasyButton label='remove' onPress={() => {deleteToDo(this.state.idx)}} />
        <EasyButton label='add' onPress={() => {addToDo( 'Buy '+Math.floor((Math.random() * 100) + 1)+' apples')}} style={{ backgroundColor: 'green' }}/>
      </EasyRow>

      <ToDoList {...this.props.todosState} {...this.props.todosActions} onPress={toggleStatus} onLongPress={this.showMenu.bind(this)}/>

      <EasyRow navigator={this.props.navigator}>
        <EasyLink label='Back'/>
      </EasyRow>
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
            <ToDoListItem rowID={rowID} rowData={rowData} {...this.props}/>
          }
        />
    </View>
    );
    }
}

class ToDoListItem extends Component {
  render() {
    const rowData = this.props.rowData;
    const rowID = this.props.rowID;
    return (
      <View>
        <TouchableHighlight
          onPress={() => { this.props.onPress( rowID ) }}
          onLongPress={() => { this.props.onLongPress( rowData, rowID ) }}>
          <View style={styles.container0}>
            <Text
              style={[styles.txt, rowData.completed && styles.completed]}>
              {rowID}. {rowData.text}
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
