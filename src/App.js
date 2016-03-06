/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import React, {
  Navigator,
  Component,
  View, ListView, ScrollView,
  Text, TouchableOpacity
} from 'react-native';
import { Provider } from "react-redux";

import Home from './pages/Home'

import configureStore from "./redux/store";
import connectComponent from './AppContainer';


//App
class App extends Component {
  render () {
    return (
        <Navigator style={{flex: 1}}

          initialRoute={{
            name: 'AppName',
            component: Home,
          }}

          renderScene={ (route, navigator) => {
            const Component = route.component;
            return (
              <View style={{flex: 1, marginTop:40}}>
                <Component
                  navigator={navigator}
                  route={route}
                  {...route.passProps}
                  {...this.props}
              />
              </View>
            );
          }}
        />
    )
  }
}

const store = configureStore();
const AppContainer = connectComponent(App);

//Root
export default class RootComponent extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
