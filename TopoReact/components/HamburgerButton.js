import React from 'react';

import {StyleSheet, Dimensions, Image, FlatList} from "react-native";
import {theme} from "galio-framework";
import {argonTheme, tabs} from "../constants/";


import {Button, Card, Select, Icon, Input, Header, Switch} from "../components/";



import {
    View, Text, TouchableHighlight,
} from 'react-native';


module.exports = class HamBurgerMenu extends React.Component {

    render() {
      //  const {navigate} = this.props.navigation;
        console.log("this.props " + JSON.stringify(this.props))


        return (
            <Button
                onPress={(navigation) =>console.log( this.props)}
                title="Info"
                color="#fff"
            />        );
    }
}


