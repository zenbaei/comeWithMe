import React, { Component } from "react";
import {
    View, StyleSheet, TouchableOpacity
} from "react-native";
import { CWMButton } from '../components/react-components';
import * as Constants from '../constants';
import { SportsCollection } from "./sport-model";
import Icon from "../components/icon";
import Card from "../components/card";

export default class Sport extends Component {

    constructor(props) {
        super(props);
        this.state = { SportsCollection };
    }

    render() {
        return (
            <View style={Styles.container}>
                <Card color='blue' justifyContent='center'>
                    {this._iconComponents(0, 5)}
                    {this._iconComponents(5, 10)}
                    {this._iconComponents(10, 15)}
                </Card>
                <View style={Styles.footer}>
                    <CWMButton onPress={this._openLocationView} borderColor="blue">Proceed</CWMButton>
                </View>
            </View>
        );
    }

    _iconComponents = (from, to) => {
        return Array.from(this.state.SportsCollection.values()).map((obj, i) => {
            if (i >= from && i < to) {
                return this._getComponent(obj, i);
            }
        });
    }

    _openLocationView = () => {
        const { navigate } = this.props.navigation;
        navigate('Map');
    }

    loginButtonWrapper = {
        borderWidth: 2,
        borderColor: 'rgb(232, 232, 232)'
    }

    _getComponent = (obj, i) => {
        return (
            <TouchableOpacity key={i} onPress={() => {
                this._select(obj.name);
            }}>
                <View style={Styles.iconWrapper}>
                    <Icon name={obj.name} source={obj.iconSource} size={icon.size}
                        color={obj.isToggled ? icon.dimmed : icon.color} />
                </View>
            </TouchableOpacity>
        )
    }

    _select = (name) => {
        let collection = this.state.SportsCollection;
        let sport = collection.get(name);
        sport.isToggled = !sport.isToggled;
        this.setState({ collection });
    }

}

const icon = {
    color: 'blue',
    dimmed: 'grey',
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
    body: {
        //flex: 2
    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 20,
        marginBottom: 20,
        borderRadius: Constants.Css.borderRadius,
        width: 50,
        height: 50
    },
    footer: {
        position: 'absolute',
        bottom: 5,
        width: "60%"
        // justifyContent: 'flex-end',
        //alignSelf: 'flex-end',
    }
})