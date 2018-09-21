import React, { Component } from "react";
import {
  View, StyleSheet, ImageBackground, KeyboardAvoidingView
} from "react-native";
import Bold from './components/Bold';
import Register from './Register';
import Card from "./components/card/Card";
import { CWMInput, CWMLink, CWMButton, CWMText } from './components/ReactComponents';
import * as Constants from './Constants';
import { CWMFBLogin } from './components/FacebookLogin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
      <ImageBackground source={require("../assets/images/arnold-shirt.jpg")}
        resizeMode="cover" style={{ width: '100%', height: '100%' }}>

       <KeyboardAvoidingView
          style={Styles.container}
          behavior="padding">

          <Card header='Come With Me' headerStyle={Styles.header} color='rgba(0, 0, 0, 0.5)'>
            <CWMInput placeholder='Email' />
            <CWMInput placeholder='Password' />
            <CWMLink onPress={this._forgetPassword} style={Styles.text}>
              Forget you login detail? <Bold>Get help sigining in</Bold>
            </CWMLink>
            <CWMButton onPress={this._navigateToLocation} style={Styles.loginButtonWrapper}>LOGIN</CWMButton>
            <CWMText align='center'>OR</CWMText>
            <CWMFBLogin onSuccessCallback={this._navigateToLocation} />
          </Card>

          <View style={Styles.footer}>
            <CWMLink onPress={this._signUp}>
              DON'T HAVE AN ACCOUNT? <Bold>SIGN UP</Bold>
            </CWMLink>
          </View>
        </KeyboardAvoidingView>
    
      </ImageBackground>
    );
  }

  _login = () => {
    alert('login button');
  }

  _signUp = () => {
    const { navigate } = this.props.navigation;
    navigate('Register');
  }

  _forgetPassword = () => {
    alert('forget sign up button');
  }

  _navigateToSport = (result) => {
    const { navigate } = this.props.navigation;
    //navigate('Sport');
  }

  _navigateToLocation = (result) => {
    const { navigate } = this.props.navigation;
    navigate('Country', { data: result });
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