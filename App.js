import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View, StyleSheet, Text, ImageBackground, List, TextInput,
  Button, TouchableHighlight
} from "react-native";
import Bold from './src/components/Bold';

//type Props = {};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={require("./cmeWithMe.jpg")} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
        <View style={Styles.container}>

          <View style={Styles.card}>

            <View style={Styles.cardHeader}>
              {Components.HEADER}
            </View>

            <View style={Styles.cardContent}>
              <View style={[Styles.cardContentRow, Styles.highlight]}>
                {Components.EMAIL}
              </View>

              <View style={[Styles.cardContentRow, Styles.highlight]}>
                {Components.PASSWORD}
              </View>

              <View style={Styles.cardContentRow}>
                {Components.FORGET}
              </View>

              <View style={[Styles.cardContentRow, Styles.loginButtonWrapper]}>
                {Components.LOGIN}
              </View>

              <View style={Styles.cardContentRow}>
                {Components.OR}
              </View>

              <View style={[Styles.cardContentRow]}>
                {Components.FACEBOOK_LOGIN}
              </View>
            </View>
          </View>

          <View style={Styles.footer}>
            {Components.SIGN_UP}
          </View>
        </View>
      </ImageBackground>
    );
  }

  _login = () => {

  }

  _loginWithFacebook = () => {

  }

  _signUp = () => {

  }
}

const PRIMARY_FONT_SIZE = 20;
const SECONDARY_FONT_SIZE = 15;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    width: '95%'
  },
  cardHeader: {
    padding: 16,
    overflow: 'hidden',
  },
  cardHeaderText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: "cathComic",
    fontSize: PRIMARY_FONT_SIZE
  },
  cardContent: {
    width: '100%',
    paddingTop: 13,
    paddingRight: 16
  },
  cardContentRow: {
    marginLeft: 10,
    marginBottom: 10
  },
  input: {
    marginLeft: 5,
    color: 'white',
    fontSize: 20
  },
  text: {
    color: 'white',
    marginLeft: 10,
    fontSize: SECONDARY_FONT_SIZE,
  },
  loginButtonWrapper: {
    borderWidth: 2,
    borderColor: 'rgb(232, 232, 232)',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  facebookButtonWrapper: {
    backgroundColor: '#3b5998',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5
  },
  facebookText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  centeredText: {
    textAlign: 'center',
    fontSize: SECONDARY_FONT_SIZE,
    color: 'white'
  },
  highlight: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
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

const Components = {
  HEADER: (<Text style={Styles.cardHeaderText}>Come With Me</Text>),

  EMAIL: (<TextInput style={Styles.input} placeholder="Email" placeholderTextColor="white"></TextInput>),

  PASSWORD: (<TextInput style={Styles.input} placeholder="Password" placeholderTextColor="white"></TextInput>),

  FORGET: (<Text style={Styles.text}>Forget you login detail? <Bold>Get help sigining in</Bold></Text>),

  LOGIN: (<Button color="transparent" title="LOG IN" onPress={this._login}></Button>),

  OR: (<Text style={Styles.centeredText}>OR</Text>),

  FACEBOOK_LOGIN: (
    <TouchableHighlight style={Styles.facebookButtonWrapper} onPress={this._loginWithFacebook}>
      <Icon name="facebook" style={[Styles.facebookText]}>
        <Text> LOGIN WITH FACEBOOK</Text>
      </Icon>
    </TouchableHighlight>
  ),

  SIGN_UP: (
    <TouchableHighlight onPress={this._signUp}>
      <Text style={{ color: 'white' }}>DON'T HAVE AN ACCOUNT? SIGN UP</Text>
    </TouchableHighlight>
  )
}