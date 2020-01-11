import React from 'react';
import {Button} from 'react-native-elements';

import {
    View, Text, TouchableHighlight,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


module.exports = class SecteurMenu extends React.Component {

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={{alignItems: 'center'}}>


                <Button onPress={() => navigate('Secteur', {name: this.props.name, path: this.props.path})}
                        title={this.props.name}> {this.props.name} </Button>

            </View>
        );
    }
}