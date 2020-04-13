import React from 'react';
import {
    View, Text, TouchableHighlight, DrawerLayoutAndroid
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SecteurMenu from './components/SecteurMenu';
import SecteurScreen from './screens/SecteurScreen'


class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <SecteurMenu navigation={this.props.navigation} id="plou"/>

                {/*<SecteurMenu navigation={this.props.navigation} name='cube toit' path='cube/grande_face/toit' />*/}
                {/*        <SecteurMenu navigation={this.props.navigation} name='imperatrice' path='imperatrice/fer_acheval/luzules/etc'/>*/}
                {/*        <SecteurMenu navigation={this.props.navigation} name='Impérator' />*/}


            </View>
        );
    }
}


const Stack = createStackNavigator();

function getTitle(route) {
    if (route && route.params && route.params.name) {
        return route.params.name;
    } else {
        return "Topo Plougastel";
    }
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Secteur" component={SecteurScreen} options={({route}) => ({title: getTitle(route)})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
