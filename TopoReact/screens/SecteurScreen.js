import React from 'react';
import _ from 'lodash'

import {
    View, Text, TouchableHighlight,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SecteurMenu from "../components/SecteurMenu";


module.exports = class SecteurScreen extends React.Component {

    getSubsectorPath(path, subsecteur) {
        return path+"/"+subsecteur.nom;
    }


    getData(path) {
        var data = require('../assets/secteurs/secteurs.json');
        console.log("--" + data.subsecteurs.length)
        if (!path){
            return {}
        }
        let split = path.split("/");
        for (var i = 0; i < split.length; i++) {
            var subsecteur = split[i];
            if (data.subsecteurs) {
                for (var j = 0; j < data.subsecteurs.length; j++) {

                    console.log("subs " + data.subsecteurs[j].id);
                }

                data = _.find(data.subsecteurs, function (o) {
                    return (o.id = subsecteur)
                });
                console.log("newdata" + JSON.stringify(data));

            } else {
                console.log("canot find subs of" + split[i])
            }
            //0  console.log("data.nom" +data["nom"]);
        }
        return data;
    }

    render() {
        const {navigation} = this.props;

        var secteur = navigation.getParam('path');
        console.log('secteur:', secteur);
        // var toto = path.join('../assets/secteurs/',secteur,'/secteur.json');
        //  var customData = require(toto);
        var data = this.getData(secteur);

        return (


            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>SecteurScreen {navigation.getParam('name')}</Text>
                <Text> {navigation.getParam('path')}</Text>
                <Text> {data.description}</Text>

                {
                    (data.subsecteurs || []) .map(subsecteur => {
                    var moumoute = this.getSubsectorPath(navigation.getParam('path'), subsecteur)
                    return (
                       // <Text> {moumoute}</Text>
                        <SecteurMenu navigation={this.props.navigation} name={subsecteur.nom} path={moumoute}/>

                    );
                })
                }


                {(data.voies || []) .map(voie =>
                
                {
                    return (

                        <Text> {voie.nom}</Text>
                    );
                })}


            </View>
        );
    }
}