import React from "react";
import { CWMText } from './react-components';
import {
    View, StyleSheet
} from "react-native";

/*
export interface CardConfig {
    header?: string,
    content?: string
}
*/

export default Card = ({ header, headerStyle, children, color, justifyContent }) => {
    return (
        <View style={[{ backgroundColor: color }, Styles.container]}>

            <View style={Styles.header}>
                <CWMText style={headerStyle}>{header}</CWMText>
            </View>

            <View style={Styles.body}>
                {children.map((cmp, i) => {
                    return (<View style={[Styles.row, { justifyContent: justifyContent }]} key={i}>{cmp}</View>)
                })}
            </View>

        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        width: '95%'
    },
    header: {
        padding: 16,
        overflow: 'hidden',
    },
    body: {
        width: '95%'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    }
})