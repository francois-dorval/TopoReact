import React from 'react';
import {
    View, Text,Button
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SecteurMenu from './components/SecteurMenu';
import SecteurScreen from './screens/SecteurScreen'
import SecteurData from './util/SecteurData'
import Voie from "./components/Voie";


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

const someData="yaa"
const someData1="yaaouuu"


function getTitle(route){
    if (route.params&&route.params.params&&route.params.params.name){
        return route.params.params.name;
    }else{
        return "Topo Plougastel"
    }
}
// const DrawerButton = (props) => {
//     return (
//         <View>
//             <TouchableOpacity onPress={() => {props.navigation.navigate('DrawerOpen')}}>
//                 <Image
//                     source={require('./assets/images/bloc.png')}
//                     style={styles.icon}
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// };

// function Root() {
//     return (
//
//         <Stack.Navigator initialRouteName='Secteur'>
//             <Stack.Screen name="Secteur"
//                           component={SecteurScreen}
//                           options={({  route }) => ({
//
//                               headerTitle: props => <Text>{getTitle(route)}</Text> ,
//                               headerLeft: (navigation) => (
//                                   <HamburgerButton navigation={navigation}/>
//                               ),
//
//                           })
//                           }
//             />
//         </Stack.Navigator>
//
//     );
// }

function Root() {
    return (
            <Drawer.Navigator>

                {(SecteurData.getSecteursData() || []).map((data, index) => {
                    console.log('data '+data)
                    return (
                        <Drawer.Screen name={data.name} >
                            {props => <SecteurScreen {...props} drawerSecteurId={data.id} />}
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
                          options={({ route }) => ({ title: getTitle(route) })}

            />
            <Stack.Screen name="DynamicSecteur" component={SecteurScreen}

            />


        </Stack.Navigator>
        </NavigationContainer>

    );
}


