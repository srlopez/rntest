'use strict';
import React, {
  Component,
  View,
  Text, TextInput,
  StyleSheet
} from 'react-native';

import { EasyRow, EasyButton, EasyLink } from '../components/EasyButton'
import styles from '../styles/styles'
import Form from '../components/Form'
import FTextInput from '../components/FTextInput'

export default class extends Component {
  componentWillMount(){
    // This is binded to dispatch(...)
    // But this way the action is dispatched but the stete recived remains unchanged
    this.props.formActions.update('required','required value')
    // This way the actions is dispatched and re-render the component
    setTimeout(() => { this.props.formActions.update('url','https://mi/url/de_prueba') }, 0);
  }

  render() {
    const { values } = this.props.formState;
    const { update, reset } = this.props.formActions;

    return (
      <View style={styles.container}>
        <Form values={this.props.formState.values} update={update} reset={reset}>
          <FTextInput name='url' label='Prueba url' placeholder='url'/>
          <FTextInput name='email' label='Prueba email' placeholder='email'/>
          <FTextInput name='required' label='Prueba required' placeholder='required'/>
        </Form>
        <EasyRow navigator={this.props.navigator} >
          <EasyLink label='Back'/>
        </EasyRow>
      </View>
    )
  }
}
