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

import styles from '../styles/styles'
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
                      name: rowData && rowData.text || 'New Item',
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

{/*}<Text style={styles.textSuper}>{this.props.route.name}</Text>{*/}
    return (
      <View style={styles.container}>

      <Text style={styles.title}>{this.props.route.name}</Text>
      <ToDoList {...this.props.todosState} {...this.props.todosActions} onPress={toggleStatus} onLongPress={this.showMenu.bind(this)}/>


      <EasyRow color='darkcyan'>
        <EasyButton label=' - ' onPress={() => {this._minus()}} style={{ backgroundColor: 'sandybrown' }} />
        <EasyButton label={'#'+this.state.idx} style={{ backgroundColor: 'coral' }} />
        <EasyButton label=' + ' onPress={() => {this._plus()}} style={{ backgroundColor: 'sandybrown' }} />

        <EasyButton label='update' onPress={() => {toggleStatus(this.state.idx)}} />
        <EasyButton label='remove' onPress={() => {deleteToDo(this.state.idx)}} />
        <EasyButton label='add' onPress={() => {addToDo( 'Buy '+Math.floor((Math.random() * 100) + 1)+' apples')}} style={{ backgroundColor: 'green' }}/>
      </EasyRow>


      <EasyRow navigator={this.props.navigator} >
        <EasyLink label='Back'/>
        <EasyLink label='New' name='New' component={ToDoEdit} passPros={{ item: null, id: -1 }} />
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
    <View style={styles.container}>
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
          <View>
            <Text
              style={[styles.normal, rowData.completed && styles.bold]}>
              #{rowID}. {rowData.text}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }
}
