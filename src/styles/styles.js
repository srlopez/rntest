/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  normal: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: 'dimgrey',
    textAlign: 'center',
    marginBottom: 5,
  },
  bold: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  inputtext:{
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
    height: 35,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1
  }
});

export default styles
