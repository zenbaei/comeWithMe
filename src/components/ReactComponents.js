import React from "react";
import {
    View, StyleSheet, Text, TextInput,
    Button, TouchableHighlight
} from "react-native";
import * as Constants from '../Constants';

export const CWMInput = ({ placeholder, ...otherProps }) => {
    return (
        <View style={Styles.inputWrapper}>
            <TextInput style={Styles.input} placeholder={placeholder} placeholderTextColor="white" {...otherProps}></TextInput>
        </View>
    )
}

export const CWMLink = ({ onPress, children, style, color, primary }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <Text style={[{
                color: color ? color : 'white',
                fontSize: primary ? Constants.Css.primaryFontSize : Constants.Css.secondaryFontSize
            },
                style]}>{children}</Text>
        </TouchableHighlight>
    )
}

export const CWMButton = ({ children, onPress, style, color }) => {
    return (
        <TouchableHighlight style={[{backgroundColor: color}, Styles.buttonWrapper, style]} onPress={onPress}>
            <Text style={Styles.buttonText}>{children}</Text>
        </TouchableHighlight>
    )
}

export const _CWMButton = ({ title, onPress, style, color }) => {
    return (
        <View style={[Styles.button, { borderColor: color ? color : 'white', backgroundColor: color }]}>
            <Button color='transparent' title={title} onPress={onPress}></Button>
        </View>
    )
}

export const CWMText = ({ children, align, color, primary, style }) => {
    return (
        <Text style={[{
            textAlign: align, color: color ? color : 'white',
            fontSize: primary ? Constants.Css.primaryFontSize : Constants.Css.secondaryFontSize
        }, Styles.text, style]}>
            {children}
        </Text>
    )
}

const Styles = StyleSheet.create({
    inputWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: Constants.Css.borderRadius,
        width: '100%'
    },
    input: {
        marginLeft: 5,
        color: 'white',
        fontSize: Constants.Css.secondaryFontSize
    },
    button: {
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        width: '100%',
        borderWidth: 2
    },
    text: {
        width: '100%'
    },
    buttonWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        width: '100%'
    },
    buttonText: {
        fontSize: Constants.Css.secondaryFontSize,
        color: 'white',
        textAlign: 'center'
    }

})