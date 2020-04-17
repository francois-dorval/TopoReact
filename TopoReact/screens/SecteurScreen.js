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


module.exports = class SecteurScreen extends React.Component {

    render() {

        // console.log("---------")
        console.log("SecteurScreen.props " + JSON.stringify(this.props))

        //const navigation = useNavigation();
        //const { secteur } = route.params;
        let secteur;
        if (this.props.drawerSecteurId) {
            secteur = this.props.drawerSecteurId;
        } else if (this.props && this.props.route && this.props.route.params) {
            secteur = this.props.route.params.id
        }

        console.log('secteur id ', secteur);

        let data = SecteurData.getData(secteur);
        let description = (data && data.description) ? data.description : "";


        /**
         * la description
         * */
        function descriptionWidget(data) {
            console.log("desc --" + JSON.stringify({data}) + "--")
            let desc = data.description
            if (!!desc) {
                return <View><Text style={styles.h1}>Description</Text>
                    <Text style={styles.description}> {desc} </Text>
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
                                 vignette={subsecteur.secteur.vignette}
                                 shortDescription={subsecteur.secteur.shortDescription}
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


        function routesWidget(data, navigation) {

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


        return (
            <ErrorBoundary>
                <ScrollView>

                    <View style={styles.scView}>
                        {descriptionWidget(data)}
                        <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>

                            <Image style={styles.secteurImage} source={data.img}/>
                            {subsecteurWidget(data, this.props.navigation)}
                        </View>

                    {/*</View>*/}
                    {/*<View>*/}

                        {routesWidget(data)}


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