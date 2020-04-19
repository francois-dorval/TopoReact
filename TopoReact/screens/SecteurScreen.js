import React from 'react';
import _ from 'lodash'

import {
    View, Image, ScrollView, StyleSheet, Text
} from 'react-native';
import {Divider} from 'react-native-elements';

import SecteurMenu from "../components/SecteurMenu";
import ErrorBoundary from "../components/ErrorBoundary"
import Voie from "../components/Voie";
import SecteurData from '../util/SecteurData';
import Color from '../constants/Colors'
import normalize from '../util/NormalizeText'


import { logger } from 'react-native-logs';
let log = logger.createLogger({ severity: 'info'});

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
                    {/*<Text style={styles.h1}>Description</Text>*/}
                    <Text style={styles.description}> {desc} </Text>
                    {/*<Divider style={styles.divider}/>*/}
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
                return <View><Text style={styles.h1}>Acces</Text>
                    <Text style={styles.description}> {text} </Text>
                    <Image style={styles.secteurImage} source={data.access_img}/>
                    <Divider style={styles.divider}/>
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
                    <Text style={styles.h1}>Secteurs</Text>
                    {widgets}
                    <Divider style={styles.divider}/>
                </View>

            }
        }


        /**
         * les voies
         * */
        function routesWidget(data) {
            let widgets =(data.routes || []).map((voie, index) => {
                return (
                    <Voie data={voie} key={index}></Voie>
                );
            })
            if (widgets.length > 0) {
                return <View>
                    <Text style={styles.h1}>Voies</Text>
                    {widgets}
                    <Divider style={styles.divider}/>
                </View>
            }
        }


        /**
         * la page!
         */
        return (
            <ErrorBoundary>
                <ScrollView>
                    <View style={styles.scView}>
                        <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>

                        {descriptionWidget(data)}
                        {accesWidget(data)}
                            <Image style={styles.secteurImage} source={data.img}/>
                            {subsecteurWidget(data, this.props.navigation)}
                        {routesWidget(data)}
                    </View>
                    </View>

                </ScrollView>
            </ErrorBoundary>
        );
    }
}

const styles = StyleSheet.create(
    {
        h1: {
            color: Color.gray1,
            fontSize: normalize(18),
            marginBottom: 8,

        },
        description: {
            marginBottom: 8
        },
        divider: {
            backgroundColor: Color.gray1
        },
        scView: {
            marginLeft: 20,
            marginTop: 20,
            marginRight: 20
        },
        secteurImage: {
            resizeMode: "contain",
            //   flex: 1,
            width: "100%",
            //height: 1000,

        }


    });