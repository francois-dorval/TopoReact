import React from 'react';
import _ from 'lodash'

import {
    View, Text, Image, ScrollView, StyleSheet
} from 'react-native';
import {Divider} from 'react-native-elements';

import SecteurMenu from "../components/SecteurMenu";
import Voie from "../components/Voie";
import SecteurData from '../util/SecteurData';


module.exports = class SecteurScreen extends React.Component {

    render() {

        // console.log("---------")
         console.log("SecteurScreen.props " + JSON.stringify(this.props))

        //const navigation = useNavigation();
        //const { secteur } = route.params;
        let secteur;
         if (this.props.drawerSecteurId){
             secteur = this.props.drawerSecteurId;
         }else if (this.props && this.props.route && this.props.route.params) {
            secteur = this.props.route.params.id
        }

        console.log('secteur id ', secteur);

        let data = SecteurData.getData(secteur);
        let description = data.description?data.description:"";

        return (
            <ScrollView>

                <View style={styles.scView}>
                    <Text> {description}</Text>
                    <Divider style={{backgroundColor: 'blue'}}/>

                    <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>

                        <Image style={styles.secteurImage} source={data.img}/>
                    {/*<Divider style={{backgroundColor: 'blue'}}/>;*/}

                    {
                        (data.subsecteurs || []).map((subsecteur, index) => {
                            return (
                                <SecteurMenu id={subsecteur.secteur.id} name={subsecteur.secteur.name}
                                             vignette={subsecteur.secteur.vignette}
                                             shortDescription={subsecteur.secteur.shortDescription}

                                             navigation={this.props.navigation}

                                    // navigation={this.props.navigation} id={subsecteur.secteur.id}
                                    //          name={subsecteur.secteur.name} key={index}
                                />
                            );
                        })
                    }
                    </View>

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