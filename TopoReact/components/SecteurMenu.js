import React from 'react';

import {StyleSheet, Dimensions, Image, FlatList, Icon, Button} from "react-native";
import SecteurName from '../util/SecteurName'

import {Card} from "react-native-elements";

// import {Button} from "../components/";

const {width} = Dimensions.get("screen");
import { logger } from 'react-native-logs';
let log = logger.createLogger({ severity: 'info'});


import {
    View, Text, TouchableHighlight,
} from 'react-native';


module.exports = class SecteurMenu extends React.Component {



    render() {

        function getInfoLine(props){
            if (!props){
                return result;
            }
            let result=[]

            const routeNumber = props.routeNumber;
            const heigth = props.heigth;
            const orientation = props.orientation;
            if (!!routeNumber){
                result.push(routeNumber +" voies")
            }
            if (!!heigth){
                result.push(heigth)
            }
            if (!!orientation){
                result.push(orientation)
            }
            return result.join(" / ");


        }


        const {navigate} = this.props.navigation;
        const id = this.props.secteur.id;
        const name = this.props.secteur.name;
        const navigationName = SecteurName.getName(this.props.secteur);

        const vignette = this.props.secteur.vignette;
        const routeNumber = this.props.secteur.routeNumber;

        log.info("navigationName "+navigationName);

        return (
            <View style={{ alignItems: 'stretch'}}>
                <TouchableHighlight  onPress={() => navigate({name:navigationName})}>
                    <Card containerStyle={{marginRight: 0,marginLeft:0}}
                          title={name}
                        image={vignette}
                    >
                        {this.props.secteur.shortDescription!=null &&

                        <Text style={styles.shortDescription}>
                            {this.props.secteur.shortDescription}
                        </Text>
                        }

                        {routeNumber!=null &&
                        <Text style={styles.routeNumber}>
                            {getInfoLine(this.props.secteur)}
                        </Text>

                        }



                    </Card>
                </TouchableHighlight>

            </View>
        );
    }
}



 const styles = StyleSheet.create({
     routeNumber:{
         marginBottom: 10,
         fontWeight:'bold',
     },
     shortDescription:{
         marginBottom: 10,

     }
 })

