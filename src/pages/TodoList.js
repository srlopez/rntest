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
import { VisibilityFilters } from '../redux/todosActions'


export default class extends Component {
  constructor(props){
    super(props);
  }

  // this.ds
  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  // this.state only for visual
  state = { idx: 0 }
  _plus = () => { this.setState( { idx: (this.state.idx+1) % this.props.todosState.todos.length } ) }
  _minus = () => { this.setState( { idx: (this.state.idx+1) % this.props.todosState.todos.length } ) }
  // end State

  //ES6 Fat arrow to avoid .bind(this)
  showMenu = (rowID, rowData ) => {
    Alert.alert(
        '#'+rowID+'-'+rowData.text,
        'choose an action',
          [
              {text: 'Delete', onPress: () =>
                  this.props.todosActions.deleteToDo(rowID)},
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

  render() {
    const { todos, visibilityFilter } = this.props.todosState;
    const { addToDo, deleteToDo, toggleStatus, setVisibilityFilter } = this.props.todosActions;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.route.name}</Text>

        <ListView style={{flex:1}}
          dataSource = { this.ds.cloneWithRows(todos) }
          renderRow  = { (rowData, sectionID, rowID) =>
            <ToDoListItem
               rowID   = { rowID }
               rowData = { rowData }
               onPress = { () => toggleStatus(parseInt(rowID)) }
               onLongPress={() => this.showMenu(parseInt(rowID), rowData)}
               />
          }
        />

        <EasyRow  >
          <EasyLink label='All' onPress={()=>setVisibilityFilter(VisibilityFilters.SHOW_ALL)}/>
          <EasyLink label='On' onPress={()=>setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}/>
          <EasyLink label='Off' onPress={()=>setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}/>
        </EasyRow>

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

class ToDoListItem extends Component {
  render() {
    const rowData = this.props.rowData;
    const rowID = this.props.rowID;
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          >
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
