import React from 'react';
import {Text, View} from "react-native";
import AppStyles from "../../util/constants/AppStyles";
import CenteredImage from "../../components/CenteredImage";
import {Divider} from "react-native-elements";


import {logger} from 'react-native-logs';
import Voie from "../../components/Voie";

let log = logger.createLogger({severity: 'info'});


module.exports = class RoutesWidget extends React.Component {


    render() {

        const data = this.props.data;

        let widgets = (data.routes || []).map((voie, index) => {
            return (
                <Voie data={voie} key={index}></Voie>
            );
        })
        if (widgets.length > 0) {
            return <View>
                <Text style={AppStyles.h1}>Voies</Text>
                {widgets}
                <Divider style={AppStyles.divider}/>
            </View>
        } else {
            return null;
        }
    }

}