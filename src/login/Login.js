import React, { Component } from "react";
import {
  View, StyleSheet, Text, ImageBackground, TouchableHighlight
} from "react-native";
import Bold from '../components/Bold';
import Register from '../register/Register';
import Card from "../components/card/Card";
import CardContent from "../components/card/CardContent";
import CardHeader from "../components/card/CardHeader";
import { ReactCmp } from '../components/ReactComponents';
import * as Constants from '../Constants';
import { FBLogin } from './FacebookLogin';

//type Props = {};
export default class Login extends Component {

  /*
  static navigationOptions = {
    title: 'Login',
  };
  */

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={require("../../assets/images/cmeWithMe.jpg")}
        resizeMode="cover" style={{ width: '100%', height: '100%' }}>
        <View style={Styles.container}>
          <Card header={new CardHeader('Come With Me', Styles.cardHeaderText)}
            content={this.contentsArr} />
          <View style={Styles.footer}>
            {this.Components.signUpLink}
          </View>
        </View>
      </ImageBackground>
    );
  }

  _login = () => {
    alert('login button');
  }

  _signUp = () => {
    alert('sign up button');
  }

  _forgetPassword = () => {
    alert('forget sign up button');
  }

  _navigateToSports = () => {
    const { navigate } = this.props.navigation;
    navigate('Sports');
  }

  Components = {
    forgetPasswordLink: (
      <TouchableHighlight onPress={this._forgetPassword}>
        <Text style={Styles.text}>Forget you login detail? <Bold>Get help sigining in</Bold></Text>
      </TouchableHighlight>
    ),
    signUpLink: (
      <TouchableHighlight onPress={this._signUp}>
        <Text style={{ color: 'white' }}>DON'T HAVE AN ACCOUNT? <Bold>SIGN UP</Bold></Text>
      </TouchableHighlight>
    )
  }

  contentsArr = [
    new CardContent(ReactCmp.input('Email'), Constants.Css.inputWrapper),
    new CardContent(ReactCmp.passwordInput, Constants.Css.inputWrapper),
    new CardContent(this.Components.forgetPasswordLink),
    new CardContent(ReactCmp.buttonTransparent('LOG IN', this._navigateToSports), Styles.loginButtonWrapper),
    new CardContent(ReactCmp.textCentered('OR')),
    new CardContent(FBLogin.facebookLoginButton(this._navigateToSports))
  ]
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
  },
  cardHeaderText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: "cathComic",
    fontSize: Constants.Css.primaryFontSize
  },
  text: {
    color: 'white',
    marginLeft: 10,
    fontSize: Constants.Css.secondaryFontSize
  },
  loginButtonWrapper: {
    borderWidth: 2,
    borderColor: 'rgb(232, 232, 232)',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  footer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});