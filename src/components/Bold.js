import React, { Component } from "react";
import { StyleSheet, Text } from 'react-native';

const styles = {
    fontWeight: "bold"
}


export default Bold = ({ children, style, ...otherProps }) =>
    <Text style={[styles, style]} {...otherProps}>{children}</Text>;

    /*
Bold.propTypes = {
    children: React.PropTypes.node.isRequired,
    style: Text.propTypes.style
};

<Bold
onPress={() => console.log('Pressed!')}
numberOfLines={2}
style={styles.green}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna
</Bold>
*/
