import React from 'react';
import {Text, View} from "react-native";
import AppStyles from "../../constants/AppStyles";
import CenteredImage from "../../components/CenteredImage";
import {Divider} from "react-native-elements";



import {logger} from 'react-native-logs';
let log = logger.createLogger({severity: 'info'});


module.exports = class AccessWidget extends React.Component {


     render(){

         const data = this.props.data;

            log.debug("desc --" + JSON.stringify({data}) + "--")
            let text = data.acces
            if (!!text) {
                return <View><Text style={AppStyles.h1}>Acces</Text>
                    <Text style={AppStyles.paragraph}> {text} </Text>
                    {CenteredImage(data.access_img)}
                    <Divider style={AppStyles.divider}/>
                </View>
            }else{
                return null;
            }
        }

}