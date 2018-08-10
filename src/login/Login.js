import React, { Component } from "react";
import {
  View, StyleSheet, Text, ImageBackground, TouchableHighlight
} from "react-native";
import Bold from '../components/Bold';
import Register from '../register/Register';
import Card from "../components/card/Card";
import CardContent from "../components/card/CardContent";
import CardHeader from "../components/card/CardHeader";
import { ReactCmp, CWMInput, CWMLink, CWMButton, CWMText } from '../components/ReactComponents';
import * as Constants from '../Constants';
import { CWMFBLogin } from './FacebookLogin';

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

          <Card header='Come With Me' headerStyle={Styles.header} color='rgba(0, 0, 0, 0.5)'>
            <CWMInput placeholder='Email' />
            <CWMInput placeholder='Password' />
            <CWMLink onPress={this._forgetPassword} style={Styles.text}>
              Forget you login detail? <Bold>Get help sigining in</Bold>
            </CWMLink>
            <CWMButton title='LOGIN' onPress={this._navigateToSports} style={Styles.loginButtonWrapper} />
            <CWMText align='center'>OR</CWMText>
            <CWMFBLogin onSuccessCallback={this._navigateToSports} />
          </Card>

          <View style={Styles.footer}>
            <CWMLink onPress={this._signUp}>
              DON'T HAVE AN ACCOUNT? <Bold>SIGN UP</Bold>
            </CWMLink>
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
    signUpLink: (
      <TouchableHighlight onPress={this._signUp}>
        <Text style={{ color: 'white' }}></Text>
      </TouchableHighlight>
    )
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
  }
});