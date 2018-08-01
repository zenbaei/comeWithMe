import React, { Component } from "react";
import {
    View, StyleSheet, Text, ImageBackground, List, TextInput,
    Button, TouchableHighlight
} from "react-native";
import * as Constants from '../Constants';

export default class ReactComponents {
    
    passwordInput = (<TextInput style={Styles.input} placeholder="Password" placeholderTextColor="white"></TextInput>);
    
    input = (placeholder) => {
        return (<TextInput style={Styles.input} placeholder={placeholder} placeholderTextColor="white"></TextInput>);
    }

    text = (text, style) => {
        return (<Text style={style}>{text}</Text>);
    }

    textCentered = (text) => {
        return this.text(text, Styles.centeredText);
    }

    buttonTransparent = (title, func) => {
        return (<Button color="transparent" title={title} onPress={func}></Button>)
    }

}

const Styles = StyleSheet.create({
    input: {
        marginLeft: 5,
        color: 'white',
        fontSize: Constants.Css.primaryFontSize,
    },
    centeredText: {
        textAlign: 'center',
        fontSize: Constants.Css.secondaryFontSize,
        color: 'white'
    },
})

export const ReactCmp = new ReactComponents();