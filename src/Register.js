import * as Constants from './Constants';
import Card from './components/card/Card';
import React from 'react';
import {
  View, StyleSheet, ImageBackground, KeyboardAvoidingView
} from "react-native";
import { CWMButton, CWMInput, CWMText } from './components/ReactComponents';
import ValidationComponent from 'react-native-form-validator';

export default class Register extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = { email: 'zenbaei' };
  }

  render() {
    return (
      <ImageBackground source={require("../assets/images/m-ali.jpg")}
        resizeMode="cover" style={{ width: '100%', height: '100%' }}>

        <KeyboardAvoidingView
          style={Styles.container}
          behavior="padding">

          <Card header="I'm the Greatest" headerStyle={Styles.header} color='rgba(0, 0, 0, 0.5)'>
            <View style={{ width: '100%' }}>
              <View style={Styles.correctImage}>
                <CWMText>correct</CWMText>
              </View>
              <CWMInput placeholder='Email' ref="email"
                onBlur={this._validateEmail()}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email} />
            </View>

            <CWMInput placeholder='Password' />
            <CWMInput placeholder='Confirm Password' />

            <CWMText>
              {this.getErrorMessages()}
            </CWMText>

            <CWMButton onPress={this._save} style={Styles.loginButtonWrapper}>Save</CWMButton>
          </Card>

          <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

  _save = () => {
    alert('save')
  }

  _validateEmail() {
    this.validate({
      email: { email: true }
    });
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