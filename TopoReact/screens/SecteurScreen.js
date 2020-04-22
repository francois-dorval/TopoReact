import React from 'react';
import _ from 'lodash'

import {
    View, Image, ScrollView, StyleSheet, Text
} from 'react-native';
import {Divider} from 'react-native-elements';

import SecteurMenu from "../components/SecteurMenu";
import ErrorBoundary from "../components/ErrorBoundary"
import CenteredImage from "../components/CenteredImage";
import Voie from "../components/Voie";

import AccesWidget from './secteur/AccessWidget'
import DescriptionWidget from './secteur/DescriptionWidget'
import RoutesWidget from './secteur/RoutesWidget'
import SubsecteurWidget from './secteur/SubsecteurWidget'



import SecteurData from '../util/SecteurData';
import AppStyles from '../util/constants/AppStyles'

import normalize from '../util/NormalizeText'


import {logger} from 'react-native-logs';
let log = logger.createLogger({severity: 'info'});

module.exports = class SecteurScreen extends React.Component {

    render() {
        log.debug("SecteurScreen.props " + JSON.stringify(this.props))
        let secteur;

        if (this.props.drawerSecteurId) {
            secteur = this.props.drawerSecteurId;
        } else if (this.props && this.props.route && this.props.route.params) {
            secteur = this.props.route.params.id
        }

        log.debug('secteur id ', secteur);
        let data = SecteurData.getData(secteur);




        /**
         * les sous-secteurs
         */
        // function subsecteurWidget(data, navigation) {
        //     let widgets = (data.subsecteurs || []).map((subsecteur, index) => {
        //         return (
        //             <SecteurMenu key={subsecteur.secteur.id} id={subsecteur.secteur.id} name={subsecteur.secteur.name}
        //                          secteur={subsecteur.secteur}
        //                          navigation={navigation}
        //             />
        //         );
        //     });
        //     if (widgets.length > 0) {
        //         return <View>
        //             <Text style={AppStyles.h1}>Secteurs</Text>
        //             {widgets}
        //             <Divider style={AppStyles.divider}/>
        //         </View>
        //
        //     }
        // }


        // /**
        //  * les voies
        //  * */
        // function routesWidget(data) {
        //     let widgets = (data.routes || []).map((voie, index) => {
        //         return (
        //             <Voie data={voie} key={index}></Voie>
        //         );
        //     })
        //     if (widgets.length > 0) {
        //         return <View>
        //             <Text style={AppStyles.h1}>Voies</Text>
        //             {widgets}
        //             <Divider style={AppStyles.divider}/>
        //         </View>
        //     }
        // }


        /**
         * la page!
         */
        return (
            <ErrorBoundary>
                <ScrollView style={AppStyles.scView}>
                    <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                        <DescriptionWidget data={data}/>
                        <AccesWidget data={data}/>
                        {CenteredImage(data.img)}
                        {CenteredImage(data.secteur1)}

                        <SubsecteurWidget data={data} navigation={this.props.navigation}/>
                        <RoutesWidget data={data}/>
                    </View>

                </ScrollView>
            </ErrorBoundary>
        );
    }
}
