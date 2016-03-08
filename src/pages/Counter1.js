'use strict';
import React, {
  Navigator,
  Component,
  View, ListView, ScrollView,
  Text, TouchableOpacity,
  StyleSheet
} from 'react-native';

import styles from '../styles/styles'
import { EasyRow, EasyButton, EasyLink } from '../components/EasyButton'
import Counter from '../components/counter'
import Counter2 from './Counter2'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>

      <Counter
        name={this.props.route.name}
        state={this.props.counterState}
        actions={this.props.counterActions}/>

        <EasyRow navigator={this.props.navigator} size={20}>
          <EasyLink label='Back'/>
          <EasyLink label='Counter 2' name='Counter Two' component={Counter2} />
        </EasyRow>
        <Text style={styles.normal}>{this.props.message}</Text>
      </View>
    )
  }
}
