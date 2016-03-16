/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { EasyRow, EasyButton, EasyLink } from '../components/EasyButton'
import styles from '../styles/styles'
import Counter1 from './Counter1'
import ToDoList from './ToDoList'
import Form from './TetsForm'

export default class extends Component {
  componentDidMount() {
    this.props.dataActions.fetchData();
  }

  render() {
    const { isFetching, message } = this.props.dataState;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Home
        </Text>
        <Text style={styles.normal}>{isFetching ? "Data" : 'Data loaded'}</Text>
        <Text style={styles.normal}>{isFetching ? "Loading..." : this.props.message}</Text>
        <Text>{"\n\n"}</Text>

        <EasyRow navigator={this.props.navigator}>
          <EasyLink label='Counter' name='Counter One' component={Counter1} passProps={{ message: 'Hello World' }}/>
          <EasyLink label='ToDo List' name='ToDo List' component={ToDoList} />
          <EasyLink label='Form' name='Form' component={Form} />
        </EasyRow>
      </View>
    );
  }
}
