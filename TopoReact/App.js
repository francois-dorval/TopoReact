import React from 'react';
import {
    View, Text, TouchableHighlight, DrawerLayoutAndroid
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SecteurMenu from './components/SecteurMenu';
import SecteurScreen from './screens/SecteurScreen'


class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <SecteurMenu navigation={this.props.navigation}/>

            </View>
        );
    }
}


//const Stack = createDrawerNavigator();

function getTitle(route) {
    if (route && route.params && route.params.name) {
        return route.params.name;
    } else {
        return "Topo Plougastel";
    }
}

// const DrawerContent = (props) => (
//     <View>
//         <View
//             style={{
//                 backgroundColor: '#f50057',
//                 height: 140,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//             }}
//         >
//             <Text style={{ color: 'white', fontSize: 30 }}>
//                 Header
//             </Text>
//         </View>
//         <DrawerItems {...props} />
//     </View>
// )


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function Root() {
    return (

        <Stack.Navigator initialRouteName='Secteur'>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Secteur" component={SecteurScreen} options={({route}) => ({title: getTitle(route)})}/>
        </Stack.Navigator>

    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Root" component={Root}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
