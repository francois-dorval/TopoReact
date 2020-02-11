import React from 'react';

import {StyleSheet, Dimensions} from "react-native";
import {theme} from "galio-framework";
import {argonTheme, tabs} from "../constants/";


import {Button,  Card, Select, Icon, Input, Header, Switch} from "../components/";

const {width} = Dimensions.get("screen");


import {
    View, Text, TouchableHighlight,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


module.exports = class SecteurMenu extends React.Component {

    render() {
        const {navigate} = this.props.navigation;

        const litem=
        {
            title: this.props.name,
                image: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
            cta: 'View article'
        }

        return (
            <View style={{alignItems: 'center'}}>


                {/*<Button color="info" style={styles.button} onPress={() => navigate('Secteur', {name: this.props.name, path: this.props.path})}*/}
                {/*          title={this.props.name}>{this.props.name}</Button>*/}



                <Card item={litem}></Card>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingBottom: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
        marginTop: 44,
        color: argonTheme.COLORS.HEADER
    },
    group: {
        paddingTop: theme.SIZES.BASE * 2
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 2
    },
    button: {
        marginBottom: theme.SIZES.BASE,
        width: width - theme.SIZES.BASE * 2
    },
    optionsButton: {
        width: "auto",
        height: 34,
        paddingHorizontal: theme.SIZES.BASE,
        paddingVertical: 10
    },
    input: {
        borderBottomWidth: 1
    },
    inputDefault: {
        borderBottomColor: argonTheme.COLORS.PLACEHOLDER
    },
    inputTheme: {
        borderBottomColor: argonTheme.COLORS.PRIMARY
    },
    inputInfo: {
        borderBottomColor: argonTheme.COLORS.INFO
    },
    inputSuccess: {
        borderBottomColor: argonTheme.COLORS.SUCCESS
    },
    inputWarning: {
        borderBottomColor: argonTheme.COLORS.WARNING
    },
    inputDanger: {
        borderBottomColor: argonTheme.COLORS.ERROR
    },
    social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        justifyContent: "center"
    },
});

