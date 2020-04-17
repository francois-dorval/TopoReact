import React from 'react';

import {StyleSheet, Dimensions, Image, FlatList, Icon, Button} from "react-native";
import {theme} from "galio-framework";
import {argonTheme, tabs} from "../constants/";

import {Card} from "react-native-elements";

// import {Button} from "../components/";

const {width} = Dimensions.get("screen");


import {
    View, Text, TouchableHighlight,
} from 'react-native';


module.exports = class SecteurMenu extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        //console.log("this.props " + JSON.stringify(this.props))
        const id = this.props.id;
        const name = this.props.name;
        const vignette = this.props.vignette;

        const shortDescription = this.props.shortDescription;

        // console.log("SecteurMenu " + id + " - " + name)


        return (
            <View style={{alignItems: 'stretch'}}>
                {/*<Image*/}
                {/*    source={require('../assets/images/robot-prod.png')}*/}
                {/*    style={{width: 400, height: 400}}*/}
                {/*/>*/}


                {/*<Button color="info" style={styles.button}*/}
                {/*        onPress={() => this.props.navigation.navigate('Root', {screen: 'Secteur', params:*/}
                {/*        {name: this.props.name, id: this.props.id}})}*/}
                {/*            title={this.props.name}>{this.props.name}</Button>*/}


                {/*<Button color="info" style={styles.button} onPress={() => navigate("DynamicSecteur",{name:this.props.name, id:this.props.id})}*/}

                <TouchableHighlight onPress={() => navigate({name})}>
                    <Card
                        title={name}
                        image={vignette}
                    >
                        <Text style={{marginBottom: 10}}>
                            {shortDescription}                    </Text>
                        {/*<Button*/}
                        {/*    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}*/}
                        {/*    title={name}*/}
                        {/*    onPress={() => navigate({name})}*/}
                        {/*/>*/}
                    </Card>
                </TouchableHighlight>

            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     title: {
//         paddingBottom: theme.SIZES.BASE,
//         paddingHorizontal: theme.SIZES.BASE * 2,
//         marginTop: 44,
//         color: argonTheme.COLORS.HEADER
//     },
//     group: {
//         paddingTop: theme.SIZES.BASE * 2
//     },
//     shadow: {
//         shadowColor: "black",
//         shadowOffset: {width: 0, height: 2},
//         shadowRadius: 4,
//         shadowOpacity: 0.2,
//         elevation: 2
//     },
//     button: {
//         marginBottom: theme.SIZES.BASE,
//         width: width - theme.SIZES.BASE * 2
//     },
//     optionsButton: {
//         width: "auto",
//         height: 34,
//         paddingHorizontal: theme.SIZES.BASE,
//         paddingVertical: 10
//     },
//     input: {
//         borderBottomWidth: 1
//     },
//     inputDefault: {
//         borderBottomColor: argonTheme.COLORS.PLACEHOLDER
//     },
//     inputTheme: {
//         borderBottomColor: argonTheme.COLORS.PRIMARY
//     },
//     inputInfo: {
//         borderBottomColor: argonTheme.COLORS.INFO
//     },
//     inputSuccess: {
//         borderBottomColor: argonTheme.COLORS.SUCCESS
//     },
//     inputWarning: {
//         borderBottomColor: argonTheme.COLORS.WARNING
//     },
//     inputDanger: {
//         borderBottomColor: argonTheme.COLORS.ERROR
//     },
//     social: {
//         width: theme.SIZES.BASE * 3.5,
//         height: theme.SIZES.BASE * 3.5,
//         borderRadius: theme.SIZES.BASE * 1.75,
//         justifyContent: "center"
//     },
// });

