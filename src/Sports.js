import React, { Component } from "react";
import {
    View, StyleSheet, Text, ImageBackground, TouchableOpacity
} from "react-native";
import Ionicons  from "react-native-vector-icons/Ionicons";
import CommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Constants from './Constants';

export default class Sports extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.row}>
                    {this._iconComponent('table-tennis', icon.source.FontAwesome5)}
                    {this._iconComponent('ios-football', icon.source.Ionicons)}
                    {this._iconComponent('ios-tennisball', icon.source.Ionicons)}
                    {this._iconComponent('volleyball-ball', icon.source.FontAwesome5)}
                    {this._iconComponent('karate', icon.source.CommunityIcons)}
                </View>
                <View style={Styles.row}>
                    {this._iconComponent('football-ball', icon.source.FontAwesome5)}
                </View>
            </View>
        );
    }

    _select = (sport) => {
        alert(sport);
    }

    _iconComponent = (name, source) => {
        return (
            <View style={Styles.iconContainer}>
                <TouchableOpacity onPress={() => this._select(name)}>
                    {this._iconSource(name, source)}
                </TouchableOpacity>
            </View>
        )
    }

    _iconSource = (name, source) => {
        switch (source) {
            case icon.source.FontAwesome5:
                return (<FontAwesome5 name={name} size={icon.size} color={icon.color} />);
            case icon.source.Ionicons:
                return (<Ionicons name={name} size={icon.size + 5} color={icon.color} />);
            case icon.source.CommunityIcons: 
                return (<CommunityIcons name={name} size={icon.size + 5} color={icon.color} />);
        }
    }

}

const icon = {
    source: {
        FontAwesome5: 1,
        Ionicons: 2,
        CommunityIcons: 3
    },
    color: 'blue',
    size: 30
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'blue'
        //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    row: {
        flexDirection: 'row'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 20,
        marginBottom: 20,
        borderRadius: Constants.Css.borderRadius,
        width: 50,
        height: 50
    }
})