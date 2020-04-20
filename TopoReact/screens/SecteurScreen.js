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

import SecteurData from '../util/SecteurData';
import AppStyles from '../constants/AppStyles'

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
         * la description
         * */
        function descriptionWidget(data) {
            log.debug("desc --" + JSON.stringify({data}) + "--")
            let desc = data.description
            if (!!desc) {
                return <View>
                    <Text style={AppStyles.paragraph}> {desc} </Text>
                </View>
            }
        }

        /**
         * la description
         * */
        function accesWidget(data) {
            log.debug("desc --" + JSON.stringify({data}) + "--")
            let text = data.acces
            if (!!text) {
                return <View><Text style={AppStyles.h1}>Acces</Text>
                    <Text style={AppStyles.paragraph}> {text} </Text>
                    {CenteredImage(data.access_img)}
                    <Divider style={AppStyles.divider}/>
                </View>
            }
        }


        /**
         * les sous-secteurs
         */
        function subsecteurWidget(data, navigation) {
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

            }
        }


        /**
         * les voies
         * */
        function routesWidget(data) {
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
            }
        }


        /**
         * la page!
         */
        return (
            <ErrorBoundary>
                <ScrollView style={AppStyles.scView}>
                    <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                        {descriptionWidget(data)}
                        {accesWidget(data)}
                        {CenteredImage(data.img)}
                        {CenteredImage(data.secteur1)}

                        {subsecteurWidget(data, this.props.navigation)}
                        {routesWidget(data)}
                    </View>

                </ScrollView>
            </ErrorBoundary>
        );
    }
}
