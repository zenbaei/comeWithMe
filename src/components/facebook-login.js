import React from "react";
import { AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
const FBSDK = require('react-native-fbsdk');
import Icon from "react-native-vector-icons/FontAwesome";
import Bold from './bold';
import * as Constants from '../constants';
import {
    Text, TouchableHighlight, StyleSheet
} from "react-native";

const {
    LoginManager,
} = FBSDK;


const _login = (onSuccessCallback) => {
    LoginManager.logInWithReadPermissions(['email']).then( //user_hometown
        (result) => {
            if (result.isCancelled) {
                alert('Login was cancelled');
            } else {
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        const facebookRequest = _facebookRequest(data.accessToken, onSuccessCallback);
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

const _facebookRequest = function (accessToken, onSuccessCallback) {
    return new GraphRequest(
        '/me',
        {
            accessToken: accessToken,
            parameters: {
                fields: {
                    string: 'email,name,first_name,middle_name,last_name,hometown'
                }
            }
        },
        _facebookResponseCallback(onSuccessCallback)
    );
}

const _facebookResponseCallback = (callback) => {

    function fbRspClb(error, result) {
        if (error) {
            alert('Error fetching data: ' + JSON.stringify(error));
        } else {
            callback(result);
        }
    }

    return fbRspClb;
}

export const CWMFBLogin = ({ onSuccessCallback }) => {
    return (
        <TouchableHighlight style={Styles.buttonWrapper} onPress={() => _login(onSuccessCallback)}>
            <Icon name="facebook-square" style={Styles.text}>
                <Text> <Bold>LOGIN WITH FACEBOOK</Bold></Text>
            </Icon>
        </TouchableHighlight>
    )
}

const Styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: '#3b5998',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: Constants.Css.borderRadius,
        width: '100%'
    },
    text: {
        fontSize: Constants.Css.secondaryFontSize,
        color: 'white',
        textAlign: 'center'
    }
})
