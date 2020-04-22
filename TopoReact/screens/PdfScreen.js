import React from "react";
import {StyleSheet, Dimensions, View, ScrollView} from 'react-native';

import PDFReader from 'rn-pdf-reader-js'

import { logger } from 'react-native-logs';
import AppStyles from "../util/constants/AppStyles";
import ErrorBoundary from "../components/ErrorBoundary";


let log = logger.createLogger({ severity: 'info'});

module.exports= class PdfScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
            <PDFReader                 source={{uri: 'http://cafbrest.ffcam.fr/tzr/scripts/downloader2.php?filename=T004/fichier/a4/c7/52p3e9cfj2c8&mime=application/pdf&originalname=topoPlougastel-v_1-1.pdf'}}>
            </PDFReader>
            </View>
        )
    }
}