import React from 'react';
import {Text, View} from "react-native";
import AppStyles from "../../constants/AppStyles";
import CenteredImage from "../../components/CenteredImage";
import {Divider} from "react-native-elements";


import {logger} from 'react-native-logs';

let log = logger.createLogger({severity: 'info'});


module.exports = class DescriptionWidget extends React.Component {


    render() {

        const data = this.props.data;
        let desc = data.description
        if (!!desc) {
            return <View>
                <Text style={AppStyles.paragraph}> {desc} </Text>
                <Divider style={AppStyles.divider}/>

            </View>
        } else {
            return null;
        }
    }

}