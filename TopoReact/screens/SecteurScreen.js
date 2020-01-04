import React from 'react';
import { View, Text,  TouchableHighlight,
 } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



module.exports = class SecteurScreen extends React.Component {
  render() {
      const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SecteurScreen {navigation.getParam('name')}</Text>
      </View>
    );
  }
}