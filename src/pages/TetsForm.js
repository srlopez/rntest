'use strict';
import React, {
  Component,
  View,
  Text, TextInput,
  StyleSheet
} from 'react-native';

import styles from '../styles/styles'
import Form from '../components/Form'
import FTextInput from '../components/FTextInput'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form>
          <FTextInput name='input1' style={styles.normal} label='Prueba texto' placeholder='Hello'/>
        </Form>
      </View>
    )
  }
}
