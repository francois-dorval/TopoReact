import React from 'react';
import _ from 'lodash'

import {
    View, Text, Image, ScrollView, StyleSheet
} from 'react-native';
import SecteurMenu from "../components/SecteurMenu";
import Voie from "../components/Voie";
import SecteurData from '../util/SecteurData';


module.exports = class SecteurScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        function getTitle() {
            try {
                return `${navigation.state.params.name}`
            } catch (e) {
                return "Topo"
            }
        }

        const {state} = navigation;
        return {
            title: getTitle(),
        };
    };

    render() {
        const {navigation} = this.props;
        let secteur = navigation.getParam('id');

        console.log('secteur id ', secteur);

        let data = SecteurData.getData(secteur);

        return (
            <ScrollView>

                <View style={styles.scView}>
                    <Text> {data.description}</Text>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

                    <Image style={styles.secteurImage} source={data.img}/>
                        </View>
                    {
                        (data.subsecteurs || []).map((subsecteur, index) => {
                            return (
                                <SecteurMenu navigation={this.props.navigation} id={subsecteur.secteur.id}
                                             name={subsecteur.secteur.name} key={index}/>
                            );
                        })
                    }

                </View>
                <View>

                    {(data.routes || []).map((voie, index) => {
                        return (
                            <Voie data={voie} key={index}></Voie>
                        );
                    })}


                </View>
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create(
    {
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