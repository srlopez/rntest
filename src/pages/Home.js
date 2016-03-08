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
import Counter1 from './Counter1'
import ToDoList from './ToDoList'

export default class extends Component {
  componentDidMount() {
    this.props.dataActions.fetchData();
  }

  render() {
    const { isFetching, message } = this.props.dataState;

    return (
      <View style={styles.container}>
        <Text style={styles.textSuper}>
          Home
        </Text>
        <Text>{isFetching ? "Data" : 'Data loaded'}</Text>
        <Text>{isFetching ? "Loading..." : this.props.message}</Text>
        <Text>{"\n\n"}</Text>

        <EasyRow navigator={this.props.navigator}>
          <EasyLink label='Counter' name='Counter One' component={Counter1} passProps={{ message: 'Hello World' }}/>
          <EasyLink label='ToDo List' name='ToDo List' component={ToDoList} />
        </EasyRow>
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
});
