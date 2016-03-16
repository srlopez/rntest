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
  Alert,
  TextInput
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
  ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });
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

  applyFilter = ( list, filter, text ) => {
    switch( filter ) {
      case VisibilityFilters.SHOW_ACTIVE:
        return list.filter( elem => elem.completed == true );
      case VisibilityFilters.SHOW_COMPLETED:
        return list.filter( elem => elem.completed == false );
      default:
        return list.filter( elem => elem.text.toLowerCase().indexOf(text.toLowerCase()) > -1 )
    }

  }

  render() {
    const { todos, visibilityFilter, textFilter } = this.props.todosState;
    const { addToDo, deleteToDo, toggleStatus, setVisibilityFilter, setTextFilter } = this.props.todosActions;
    const dataSource = this.ds.cloneWithRows( this.applyFilter( todos, visibilityFilter, textFilter ))

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.route.name}</Text>

        <ListView style={{flex:1}}
          dataSource = { dataSource }
          renderRow  = { (rowData, sectionID, rowID, highlightRow) =>
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
        <TextInput
          style = { styles.normal, {  height: 30, borderColor: 'gray', borderWidth: 1, margin: 5 }}
          onChangeText={(text) => setTextFilter(text)}
          placeholder = ' filtra me'
          autoCapitalize = 'none'
          autoCorrect
          keyboardType = 'web-search'
          />
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
