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
import Counter2 from './Counter2'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textNormal}>{this.props.message}</Text>
      <Counter
        name={this.props.route.name}
        state={this.props.counterState}
        actions={this.props.counterActions}/>

        <EasyRow navigator={this.props.navigator} size={20}>
          <EasyLink label='Back'/>
          <EasyLink label='Counter 2' name='Counter Two' component={Counter2} />
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
