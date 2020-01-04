import React from 'react';
import { View, Text,  TouchableHighlight,
 } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


module.exports = class SecteurMenu extends React.Component {

  render() {
       const {navigate} = this.props.navigation;

    return (
      <View style={{alignItems: 'center'}}>

        <TouchableHighlight
                onPress={() => navigate('Secteur', {name: 'Jane'})}


                                >
                                 <Text> {this.props.name} </Text>
                                </TouchableHighlight>

      </View>
    );
  }
}