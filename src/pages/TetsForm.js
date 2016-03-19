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
import FSubmitButton from '../components/FSubmitButton'

export default class extends Component {
  componentWillMount(){
    // This is binded to dispatch(...)
    // But this way the action is dispatched but the stete recived remains unchanged
    this.props.formActions.update('name','required value')
    // This way the actions is dispatched and re-render the component
    setTimeout(() => { this.props.formActions.update('url','https://mi/url/de_prueba') }, 0);
  }

  render() {

    return (
      <View style={styles.container}>
        <Form values={this.props.formState.values}
              update={this.props.formActions.update}
              reset={this.props.formActions.reset}
              onSubmit={data => console.dir(data)}>
          <FTextInput name='name'
                validate={['required']}
                label='Name' placeholder='Name'/>
          <FTextInput name='url'
                validate={['url']}
                label='URL del sitio'
                placeholder='url'/>
          <FTextInput name='email'
                validate={['email','required']}
                label='email de contacto' placeholder='email'/>

          <FSubmitButton/>
        </Form>
        <EasyRow navigator={this.props.navigator} >
          <EasyLink label='Back'/>
        </EasyRow>
      </View>
    )
  }
}
