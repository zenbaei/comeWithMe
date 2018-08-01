import { ReactCmp } from '../components/ReactComponents';
import CardContent from '../components/card/CardContent';
import * as Constants from '../Constants';
import Card from '../components/card/Card';

export default class Register {

    contentsArr = [
        new CardContent(ReactCmp.input('Email'), Constants.Css.inputWrapper),
        new CardContent(ReactCmp.passwordInput, Constants.Css.inputWrapper),
        new CardContent(ReactCmp.input('Location'), Constants.Css.inputWrapper),
        new CardContent(ReactCmp.input('Sports'), Constants.Css.inputWrapper)
    ]

    render () {
        return (
            <Card header='Register' />
        )
    }
}