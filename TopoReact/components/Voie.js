import React from 'react';

import {StyleSheet, Dimensions, Image, PixelRatio} from "react-native";
import {theme} from "galio-framework";
import {argonTheme, tabs} from "../constants/";


import {Button, Card, Select, Icon, Input, Header, Switch} from "../components/";

const {width} = Dimensions.get("screen");


import {
    View, Text, TouchableHighlight,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


module.exports = class Voie extends React.Component {

    render() {
        // const {navigate} = this.props.navigation;
        console.log("this.props " + JSON.stringify(this.props))
        const data = this.props.data


        return (

            <View style={styles.mainContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.routeName} numberOfLines={1}>
                        {data.name}
                    </Text>
                    <Text style={styles.routeQuotation} numberOfLines={1}>
                        {data.quotation}
                    </Text>
                </View>
                <View>
                    <Text style={styles.routeDescription} numberOfLines={2}>
                        {data.description}
                    </Text>
                </View>
            </View>


            // <View >
            //      <Text> {data.name}/{data.quotation}</Text>
            // </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            flexDirection: 'column',
            alignItems:'stretch',
            //backgroundColor: 'green'

        },

        textContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
           // backgroundColor: 'powderblue'

        },
        routeName: {
            //flex: 1,
            fontSize: 18,
            fontWeight: '500',

            marginBottom: 2
        }
        ,
        routeQuotation: {
            fontSize: 18,
            fontWeight: "bold",

        },
        routeDescription: {
            color: '#999999',
            fontSize: 12,
        }
        ,
        row: {
            alignItems: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 5
        }
        ,
// cellImage: {
//     backgroundColor: '#dddddd',
//     height: 93,
//     marginRight: 10,
//     width: 60,
// },
        cellBorder: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            // Trick to get the thinest line the device can display
            height: 1 / PixelRatio.get(),
            marginLeft: 4
        }
        ,

//     title: {
//         paddingBottom: theme.SIZES.BASE,
//         paddingHorizontal: theme.SIZES.BASE * 2,
//         marginTop: 44,
//         color: argonTheme.COLORS.HEADER
//     },
//     group: {
//         paddingTop: theme.SIZES.BASE * 2
//     },
//     shadow: {
//         shadowColor: "black",
//         shadowOffset: {width: 0, height: 2},
//         shadowRadius: 4,
//         shadowOpacity: 0.2,
//         elevation: 2
//     },
//     button: {
//         marginBottom: theme.SIZES.BASE,
//         width: width - theme.SIZES.BASE * 2
//     },
//     optionsButton: {
//         width: "auto",
//         height: 34,
//         paddingHorizontal: theme.SIZES.BASE,
//         paddingVertical: 10
//     },
//     input: {
//         borderBottomWidth: 1
//     },
//     inputDefault: {
//         borderBottomColor: argonTheme.COLORS.PLACEHOLDER
//     },
//     inputTheme: {
//         borderBottomColor: argonTheme.COLORS.PRIMARY
//     },
//     inputInfo: {
//         borderBottomColor: argonTheme.COLORS.INFO
//     },
//     inputSuccess: {
//         borderBottomColor: argonTheme.COLORS.SUCCESS
//     },
//     inputWarning: {
//         borderBottomColor: argonTheme.COLORS.WARNING
//     },
//     inputDanger: {
//         borderBottomColor: argonTheme.COLORS.ERROR
//     },
//     social: {
//         width: theme.SIZES.BASE * 3.5,
//         height: theme.SIZES.BASE * 3.5,
//         borderRadius: theme.SIZES.BASE * 1.75,
//         justifyContent: "center"
//     },
    }
    )
;

