import React, { Component } from "react";
import {
    View, StyleSheet, Text
} from "react-native";
import MapView, { Circle } from 'react-native-maps';
import { CurrentLocation } from './Geolocation';
import { CWMText, CWMButton } from '../components/ReactComponents';

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

    onRegionChangeComplete = (region) => {

    }

    render() {
        if (this.state.isLoading) {
            return (<CWMText color="black" primary>Loading...</CWMText>)
        }
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialRegion={this.state.region}
                    onRegionChange={this.onRegionChange}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                >
                    <Circle center={{
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude
                    }}
                        radius={3000} fillColor='#FF7171' strokeColor="red" strokeWidth={2} />
                </MapView>
                <View style={styles.buttonContainer}>
                    <CWMButton title="Done"
                        onPress={this.onRegionChangeComplete} color="blue" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        //backgroundColor: 'transparent',
        width: '30%'
    },
});