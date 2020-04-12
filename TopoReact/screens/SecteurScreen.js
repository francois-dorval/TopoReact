import React from 'react';
import _ from 'lodash'

import {
    View, Text, Image
} from 'react-native';
import SecteurMenu from "../components/SecteurMenu";
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
        // if (!secteur) {
        //     secteur = "plou";
        // }
        console.log('secteurid::', secteur);

        let data = SecteurData.getData(secteur);

        //navigation.setOptions({ title: data.id })

        function getDescription() {
            return "deeesc"
        }

        return (

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> {navigation.getParam('path')}</Text>

                <Text> {data.description}</Text>

                <Image source={data.img}/>
                {
                    (data.subsecteurs || []).map(subsecteur => {
                        console.log('display button ' + subsecteur.secteur.id + " - " + subsecteur.secteur.name)
                        return (
                            <SecteurMenu navigation={this.props.navigation} id={subsecteur.secteur.id}
                                         name={subsecteur.secteur.name}/>

                        );
                    })
                }


                {(data.routes || []).map(voie => {
                    return (

                        <Text> {voie.name}/{voie.quotation}</Text>
                    );
                })}


            </View>
        );
    }
}