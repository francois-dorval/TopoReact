import React from 'react';

import {StyleSheet, Dimensions, Image, PixelRatio} from "react-native";

const {width} = Dimensions.get("screen");

import Colors from '../constants/Colors'
import normalize from "../util/NormalizeText";

import {
    View, Text, TouchableHighlight,
} from 'react-native';

import {logger} from 'react-native-logs';
let log = logger.createLogger({severity: 'info'});

module.exports = class Voie extends React.Component {

    render() {
        // const {navigate} = this.props.navigation;
        //console.log("this.props " + JSON.stringify(this.props))
        const data = this.props.data

        function getImage(){
           // console.log("image "+data.equipment);
            if (data.equipment === "c") {
                return require('../assets/images/coinceur_2.png')
            }else if (data.equipment === "t"){
                return require('../assets/images/traversee_2.png')
            }else if (data.equipment === "b"){
                return require('../assets/images/bloc_2.png')
            }else if (data.equipment === "e"){
                return require('../assets/images/spit_2.png')
            }
        }

        function descriptionWidget(data){
            if (!!data.description && data.description!==0){
                return  <Text style={styles.routeDescription} numberOfLines={2}>
                    {data.description}
                </Text>
            }else{
                log.info("no description "+data.name);
                return null;
            }
        }


        return (

            <View style={styles.mainContainer}>

                <View style={styles.verticalContainer}>
                    <Text style={styles.routeNumber}>
                        {data.number}
                    </Text>
                </View>
                <View style={styles.textContainer}>

                    <Text style={styles.routeName} numberOfLines={1}>
                        {data.name}
                    </Text>
                    {descriptionWidget(data)}
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.routeQuotation} numberOfLines={1}>
                        {data.difficulty}
                    </Text>
                </View>

                <View>
                    <Image style={styles.equipement} source={getImage()}></Image>
                </View>
            </View>


            // <View >
            //      <Text> {data.name}/{data.quotation}</Text>
            // </View>
        );
    }
}


const DEBUGCOLORS = {
    //dbg1: 'powderblue',
    //dbg2: 'green',
    dbg1: '#00000000',
    dbg2: '#00000000',
    black: '#00000000',
    // your colors
}
const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'stretch',
            backgroundColor: DEBUGCOLORS.dbg2,
            alignContent: 'center',
            //padding: "1%"
        },

        textContainer: {
            flex: 1,
            flexDirection: 'column',
            //justifyContent: 'space-between',
            backgroundColor: DEBUGCOLORS.dbg1,
            justifyContent: 'center'

        },
        verticalContainer: {
            backgroundColor: DEBUGCOLORS.dbg1,
            flexDirection: 'column',
            justifyContent: "center",

        },
        routeNumber: {
            fontSize: normalize(15),
            fontStyle: 'italic',
            color: Colors.gray1,
            margin: "3%",
            textAlign: 'center'
        },
        routeName: {
            //flex: 1,
            fontSize: normalize(15),
            fontWeight: '500',
            marginBottom: 2
        }
        ,
        routeQuotation: {
            fontSize: normalize(16),
            fontWeight: "bold",
            alignItems: "center"

        },
        routeDescription: {
            color: '#999999',
            fontSize: 12,
        },
        equipement: {
            //  margin:"1%",
            flex: 1,
            width: 40,
            height: 40,
            resizeMode: 'contain'
        }
        ,
        cellBorder: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            // Trick to get the thinest line the device can display
            height: 1 / PixelRatio.get(),
            marginLeft: 4
        }
    })

