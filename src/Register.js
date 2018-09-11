import * as Constants from './Constants';
import Card from './components/card/Card';
import React, { Component } from 'react';
import {
  View, StyleSheet, ImageBackground
} from "react-native";
import { CWMButton, CWMInput, CWMText } from './components/ReactComponents';

export default class Register extends Component {

    render() {
        return (
          <ImageBackground source={require("../assets/images/m-ali.jpg")}
            resizeMode="cover" style={{ width: '100%', height: '100%' }}>
    
            <View style={Styles.container}>
    
              <Card header="I'm the Greatest" headerStyle={Styles.header} color='rgba(0, 0, 0, 0.5)'>
                <View style={{width: '100%'}}>
                <View style={Styles.correctImage}>
                  <CWMText>correct</CWMText>
                  </View>
                  <CWMInput placeholder='Email' />
                </View>
                
                <CWMInput placeholder='Password' />
                <CWMInput placeholder='Confirm Password' />
                
                <CWMButton onPress={this._save} style={Styles.loginButtonWrapper}>Save</CWMButton>
              </Card>
            </View>
          </ImageBackground>
        );
      }

      _save = () => {
        alert('save')
      }
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      borderWidth: 2,
      //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    header: {
      color: 'white',
      textAlign: 'center',
      fontFamily: "cathComic",
      fontSize: Constants.Css.primaryFontSize
    },
    text: {
      marginLeft: 10,
      //fontSize: Constants.Css.secondaryFontSize
    },
    loginButtonWrapper: {
      borderWidth: 2,
      borderColor: 'rgb(232, 232, 232)'
    },
    footer: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
    correctImage: {
      opacity: 10,
      position: "absolute",
      right: 10,
      top: 10
    }
  });