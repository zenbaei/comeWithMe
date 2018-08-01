import React, { Component } from "react";
import { ReactCmp } from '../../components/ReactComponents';
import {
    View, StyleSheet
} from "react-native";

/*
export interface CardConfig {
    header?: string,
    content?: string
}
*/

export default class Card extends Component {
    render() {
        return (
            <View style={Styles.card}>

                <View style={Styles.header}>
                    { ReactCmp.text(this.props.header.title, this.props.header.style) }
                </View>

                <View style={Styles.content}>
                    {this._content}
                </View>

            </View>
        );
    }

    _content = (
        this.props.content.map((cc,i) => {
            return (
                <View key={i} style={[Styles.row, cc.style]}>
                    {cc.body}
                </View>
            )
        })
    )

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
        width: '95%'
    },
    header: {
        padding: 16,
        overflow: 'hidden',
    },
    content: {
        width: '100%',
        paddingTop: 13,
        paddingRight: 16
    },
    row: {
        marginLeft: 10,
        marginBottom: 10
    }
})