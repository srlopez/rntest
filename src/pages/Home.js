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

import Counter1 from './Counter1'

export default class extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textSuper}>
          Home
        </Text>
        <TouchableOpacity onPress={()=>{
          this.props.navigator.push({
            name: 'Counter1',
            component: Counter1,
            passProps: { message: 'Hello World' }
           })
        }}>
          <Text style={styles.textNormal}>{'<'}Forward{'>'} to Counter1</Text>
        </TouchableOpacity>
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
