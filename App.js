import { createStackNavigator } from 'react-navigation';
import Login from './src/login/Login';
import Sports from './src/Sports';

const App = createStackNavigator({
    Home: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Sports: {
        screen: Sports,
        navigationOptions: {
            title: 'Sports'
        }
    }
});

export default App;
