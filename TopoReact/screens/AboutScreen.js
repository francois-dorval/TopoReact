import React from "react";
import {Image, ScrollView, Text, View} from "react-native";

import { logger } from 'react-native-logs';
import ErrorBoundary from "../components/ErrorBoundary";
import CenteredImage from "../components/CenteredImage";

import AppStyles from "../util/constants/AppStyles";

let log = logger.createLogger({ severity: 'info'});

module.exports= class AboutScreen extends React.Component {
    render() {
        log.info("about!");

        const img = (source) => {
            const { width, height } = Image.resolveAssetSource(source)
            return <Image source={source} style={{ width: null, height: null, resizeMode: 'cover', aspectRatio: width / height }} />
        }

        return (

                <ErrorBoundary>
                    <ScrollView style={AppStyles.scView}>

                    <Text style={AppStyles.h1}>Ce topo</Text>
                    <Text style={AppStyles.paragraph}>Cette appli reprend les informations du Topo du CAF de brest (2003), avec quelques compléments et ajouts.{"\n"}
                    Le topo n'est plus réédité et est téléchargeable sur le site du CAF.{"\n"}
                    Si une réédition a lieu cette appli sera supprimée, les ventes de topo permettant de financer l'équipement.
                    </Text>
                    {CenteredImage (require('../assets/images/topopapier.jpg'))}

                    <Text style={AppStyles.h1}>L'équipement</Text>
                    <Text style={AppStyles.paragraph}>
                        D’une manière générale le site de Plougastel est sportif, ce qui signifie un équipement « béton », les quelques voies non équipées le sont volontairement pour différentes raisons, (même si les coinceurs y sont parfois impossible à poser), donc pour ceux que le perfo démange, prenez contact avec la municipalité et les clubs du coin ; nous sommes nombreux à pro
                        fiter de ces sites, nous devons donc composer en harmonie.{"\n"}
                        Les équipeurs donnent de leur temps et de leur énergie pour entretenir notre terrain de jeu... N'hésitez pas à proposer vos services, ou si vous êtes un club à contribuer financièrement!
                    </Text>


                    <Text style={AppStyles.h1}>Environnement</Text>
                    <Text style={AppStyles.paragraph}>L'accès aux sites est conditionné par le comportement responsable des grimpeurs!{"\n"}
                    Respectez les chemins, emportez vos déchets (et même un peu plus).{"\n"}
                    Certains secteurs peuvent être interdits en période de nidification.

                    </Text>


                </ScrollView>


    </ErrorBoundary>
        );
    }
};
