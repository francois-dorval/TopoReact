import React from 'react';
import {Text, View} from "react-native";
import AppStyles from "../../util/constants/AppStyles";
import CenteredImage from "../../components/CenteredImage";
import {Divider} from "react-native-elements";


import {logger} from 'react-native-logs';
import Voie from "../../components/Voie";
import SecteurMenu from "../../components/SecteurMenu";

let log = logger.createLogger({severity: 'info'});


module.exports = class RoutesWidget extends React.Component {


    render() {

        const data = this.props.data;
        const navigation = this.props.navigation;

        let widgets = (data.subsecteurs || []).map((subsecteur, index) => {
            return (

                <SecteurMenu key={subsecteur.secteur.id} id={subsecteur.secteur.id} name={subsecteur.secteur.name}
                             secteur={subsecteur.secteur}
                             navigation={navigation}
                />
            );
        });
        if (widgets.length > 0) {
            return <View>
                <Text style={AppStyles.h1}>Secteurs</Text>
                {widgets}
                <Divider style={AppStyles.divider}/>
            </View>

        }else{
            return null;
        }
    }

}