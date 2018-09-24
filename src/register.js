import * as Constants from './constants';
import Card from './components/card';
import Bold from './components/bold';
import React from 'react';
import {
  View, StyleSheet, ImageBackground, KeyboardAvoidingView
} from "react-native";
import { CWMButton, CWMInput, CWMText } from './components/react-components';
import ValidationComponent from 'react-native-form-validator';

export default class Register extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: true
    };
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
              {
                this._isEmailValid() ? null :
                  <View style={Styles.error}>
                    <CWMText color='red'><Bold>Invalid</Bold></CWMText>
                  </View>
              }
              <CWMInput placeholder='Email' ref='email'
                onBlur={() => this._validateEmail()}
                onFocus={() => this._setIsEmailValid(true)}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email} />
            </View>

            <CWMInput ref='password' placeholder='Password' secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              onBlur={() => this._validatePassword()}
            />

            <CWMInput placeholder='Confirm Password' secureTextEntry={true}
              onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
              value={this.state.confirmPassword}
            />

            <CWMButton onPress={this._save} style={Styles.loginButtonWrapper}>Save</CWMButton>
          </Card>

          <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

  _save = () => {
    if (!this.isFormValid() || !this._validatePasswordConfirmation()) {
      return;
    }
  }

  _validateEmail() {
    var emailValid;

    this.validate({
      email: { email: true }
    });

    if (this.isFieldInError('email')) {
      this._setIsEmailValid(false);
    } else {
      this._setIsEmailValid(true);
    }
  }

  _validatePassword() {
    this.validate({
      password: {
        minlength: 4
      },
    });
  }

  _validatePasswordConfirmation() {
    if (this.state.password !== this.state.confirmPassword) {
      return false;
    }
  }

  _setIsEmailValid(isValid) {
    this.setState({
      isEmailValid: isValid
    })
  }

  _isEmailValid() {
    return this.state.isEmailValid;
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
  error: {
    opacity: 10,
    position: "absolute",
    right: 10,
    top: 10
  }
});