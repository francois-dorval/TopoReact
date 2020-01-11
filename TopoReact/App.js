import React from 'react';
import { View, Text,  TouchableHighlight,
 } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SecteurScreen from './screens/SecteurScreen';

import SecteurMenu from './components/SecteurMenu';




class HomeScreen extends React.Component {
  render() {
      const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <SecteurMenu navigation={this.props.navigation} name='cube' path='cube/grande_face' />

        <SecteurMenu navigation={this.props.navigation} name='cube toit' path='cube/grande_face/toit' />
                <SecteurMenu navigation={this.props.navigation} name='imperatrice' path='imperatrice/fer_acheval/luzules/etc'/>
                <SecteurMenu navigation={this.props.navigation} name='Impérator' />


      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Secteur: SecteurScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}