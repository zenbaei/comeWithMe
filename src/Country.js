import React, { Component } from "react";
import {
    View, StyleSheet, Picker
} from "react-native";
import { CWMButton, CWMText } from './components/ReactComponents';
import Card from "./components/card/Card";
import { Countries } from "./Constants";

export default class Country extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data');

        return (
            <View style={Styles.container}>
                <View>
                    <CWMText color="black" align="center">Hey {data.first_name}!</CWMText>
                    <Card color="grey" justifyContent='center'>
                        <CWMText>Find Your Sports Partenrs In..</CWMText>
                        <Picker
                            selectedValue={this.state.country}
                            style={{ height: 50, width: 250 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ country: itemValue })}>

                            {this._countryComponents()}
                        </Picker>

                        <Picker
                            selectedValue={this.state.city}
                            style={{ height: 50, width: 250 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>

                            {this._cityComponents()}
                        </Picker>
                    </Card>
                </View>

                <View style={Styles.footer}>
                    <CWMButton>Done</CWMButton>
                </View>
            </View>
        );
    }

    _countryComponents = () => {
        return Array.from(Object.keys(Countries)).map((prop, i) => {
            return <Picker.Item key={i} label={prop} value={prop} />
        });
    }

    _cityComponents = () => {
        var country = this.state.country;
        if (!country || country === Countries["Choose Your Country"]) {
            return <Picker.Item label='City..' value='' />
        }
        return Array.from(Countries[country]).map((prop, i) => {
            return <Picker.Item key={i} label={prop} value={prop} />
        });
    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        
        //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    body: {
        //flex: 2
    },
    footer: {
        position: 'absolute',
        bottom: 5,
        width: "60%",
        backgroundColor: 'blue'
        // justifyContent: 'flex-end',
        //alignSelf: 'flex-end',
    }
})