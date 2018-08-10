import React, { Component } from "react";
import {
    View, StyleSheet
} from "react-native";
import MapView from 'react-native-maps';
import { CurrentLocation } from './Geolocation';

export default class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: this._getCurrentPosition()
        };
    }

    _getCurrentPosition = () => {
        CurrentLocation();
        /*
        CurrentLocation().then(
            (position) => {
                alert(position);
                return {
                    longitude: position.longitude,
                    latitude: position.latitude
                }
            });
            */
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        //height: 400,
        //width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});