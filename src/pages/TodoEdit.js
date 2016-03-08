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
import {EasyRow, EasyLink, EasyButton }   from '../components/EasyButton'

export default class extends Component {
  constructor(){
    super();
    console.dir(this.props);
  }


  render() {
    const { todos } = this.props.todosState;
    const { addToDo, deleteToDo, toggleStatus } = this.props.todosActions;

    const item = this.props.item;
    const idx = this.props.id;

    return (
      <View style={styles.container}>
      <Text style={styles.title}>{this.props.route.name}</Text>
      <Text style={[styles.normal, item.completed && styles.bold]}>{item.text}</Text>
      <Text style={styles.normal}>{item.status?'true':'false'}</Text>

      <EasyRow color='darkcyan' >
        <EasyButton label='update' onPress={() => {toggleStatus(idx)}} />
        <EasyButton label='remove' onPress={() => {deleteToDo(idx)}} />
        <EasyButton label='add' onPress={() => {addToDo( 'Buy '+Math.floor((Math.random() * 100) + 1)+' apples')}} style={{ backgroundColor: 'green' }}/>
      </EasyRow>

      <EasyRow navigator={this.props.navigator} >
        <EasyLink label='Back'/>
      </EasyRow>

    </View>
    )
  }
}
