'use strict';
import React, {
  Navigator,
  Component,
  View, ListView, ScrollView,
  Text, TouchableOpacity,
  StyleSheet
} from 'react-native';

import { EasyRow, EasyButton, EasyLink } from '../components/EasyButton'
import Counter from '../components/counter'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter name={this.props.route.name} state={this.props.counterState} actions={this.props.counterActions}/>
        <EasyRow navigator={this.props.navigator}>
          <EasyLink label='Back'/>
        </EasyRow>
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
});
