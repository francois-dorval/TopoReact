import React from 'react';

import {StyleSheet, Dimensions, Image, FlatList, Icon, Button} from "react-native";
import {theme} from "galio-framework";
import {argonTheme, tabs} from "../constants/";

import {Card} from "react-native-elements";

// import {Button} from "../components/";

const {width} = Dimensions.get("screen");


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
        const id = this.props.id;
        const name = this.props.name;
        const vignette = this.props.vignette;
        const routeNumber = this.props.routeNumber;


        const props = this.props;

        return (
            <View style={{alignItems: 'stretch'}}>
                <TouchableHighlight onPress={() => navigate({name})}>
                    <Card
                        title={name}
                        image={vignette}
                    >
                        {this.props.shortDescription!=null &&

                        <Text style={styles.shortDescription}>
                            {this.props.shortDescription}
                        </Text>
                        }

                        {routeNumber!=null &&
                        <Text style={styles.routeNumber}>
                            {getInfoLine(this.props)}
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

