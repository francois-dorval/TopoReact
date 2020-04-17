import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import {
    Icon
} from 'native-base';


import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SecteurMenu from './components/SecteurMenu';
import SecteurScreen from './screens/SecteurScreen'
import SecteurData from './util/SecteurData'
import { DrawerActions } from '@react-navigation/native';


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

// function getTitle(route) {
//     if (route && route.params && route.params.name) {
//         return route.params.name;
//     } else {
//         return "Topo Plougastel";
//     }
// }

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

function getHeaderTitle(route) {
    // Access the tab navigator's state using `route.state`
    const routeName = route.state
        ? // Get the currently active route name in the tab navigator
        route.state.routes[route.state.index].name
        : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
          // In our case, it's "Feed" as that's the first screen inside the navigator
        route.params?.screen || 'Topo Plougastel';

    console.log("routeName " + routeName);

    return routeName;
}


function Root() {
    return (
        <Drawer.Navigator>

            {(SecteurData.getSecteursData() || []).map((data, index) => {
                console.log('data ' + data)
                return (
                    <Drawer.Screen name={data.name}>
                        {props => <SecteurScreen {...props} drawerSecteurId={data.id}/>}
                    </Drawer.Screen>

                );
            })}
        </Drawer.Navigator>
    );
}


export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Root'>
                <Stack.Screen name="Root" component={Root}
                              options={({route,navigation}) => ({
                                  headerTitle: getHeaderTitle(route),

                                  headerLeft: () => (
                                      <Icon name="menu" style={styles.menuIcon} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())}
                                  />)
                              })}
                />
                <Stack.Screen name="DynamicSecteur" component={SecteurScreen}/>


            </Stack.Navigator>
        </NavigationContainer>

    );
}


const styles = StyleSheet.create({
    menuIcon:{
        marginLeft: 10
    }
})