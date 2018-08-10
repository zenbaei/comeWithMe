import React, { Component } from "react";
import {
    View, StyleSheet
} from "react-native";
import MapView from 'react-native-maps';
import { CurrentLocation } from './Geolocation';
import { CWMText } from './components/ReactComponents';

export default class Map extends Component {

    long = 31.4400768;
    lat = 30.0056576;

    uslong = -122.4324;
    uslat = 37.78825;

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        CurrentLocation(this._initRegion);
    }

    _initRegion = (position) => {
        this.setState({
            region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            isLoading: false
        });
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {
        if (this.state.isLoading) {
            return (<CWMText color="black" primary>Loading...</CWMText>)
        }
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
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