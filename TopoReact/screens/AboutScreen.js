import React from "react";
import {Image, ScrollView, Text, View} from "react-native";

import { logger } from 'react-native-logs';
import ErrorBoundary from "../components/ErrorBoundary";

let log = logger.createLogger({ severity: 'info'});

module.exports= class AboutScreen extends React.Component {
    render() {
        log.info("about!");
        return (

            <ErrorBoundary>
            <ScrollView>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>A propos...</Text>
                </View>


            </ScrollView>
    </ErrorBoundary>
        );
    }
};
