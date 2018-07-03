import React, { Component } from "react";
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    bold: {
        fontWeight: "bold"
    }
});

export default class Bold extends Component {
    render() {
        return (
            <Text style={styles.bold}>
                {this.props.children}
            </Text>
        );
    }
}