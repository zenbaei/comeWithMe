import React from "react";
import { AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
const FBSDK = require('react-native-fbsdk');
import Icon from "react-native-vector-icons/FontAwesome";
import Bold from '../components/Bold';
import * as Constants from '../Constants';
import {
    Text, TouchableHighlight, StyleSheet
} from "react-native";

const {
    LoginManager,
} = FBSDK;

class FacebookLogin {

    onSuccessCallback;

    _login = () => {
        LoginManager.logInWithReadPermissions(['email']).then(
            (result) => {
                if (result.isCancelled) {
                    alert('Login was cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            const facebookRequest = this._facebookRequest(data.accessToken);
                            new GraphRequestManager().addRequest(facebookRequest).start();
                        }
                    )
                }
            },
            (error) => {
                alert('Login failed with error: ' + error);
            }
        );
    }

    _facebookRequest = function (accessToken) {
        let that = this;
        return new GraphRequest(
            '/me',
            {
                accessToken: accessToken,
                parameters: {
                    fields: {
                        string: 'email,name,first_name,middle_name,last_name'
                    }
                }
            },
            that._facebookResponseCallback
        );
    }

    _facebookResponseCallback = (error, result) => {
        if (error) {
            console.log(error)
            alert('Error fetching data: ' + error.toString());
        } else {
            this.onSuccessCallback();
        }
    }

    facebookLoginButton = (onSuccessCallback) => {
        this.onSuccessCallback = onSuccessCallback;
        return (
            <TouchableHighlight style={Styles.buttonWrapper} onPress={this._login}>
                <Icon name="facebook-square" style={[Styles.text]}>
                    <Text> <Bold>LOGIN WITH FACEBOOK</Bold></Text>
                </Icon>
            </TouchableHighlight>)
    }
}

const Styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: '#3b5998',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: Constants.Css.borderRadius
    },
    text: {
        fontSize: Constants.Css.secondaryFontSize,
        color: 'white',
        textAlign: 'center'
    }
})

export const FBLogin = new FacebookLogin();