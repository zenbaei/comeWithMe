import { createStackNavigator } from 'react-navigation';
import Login from './src/login/Login';
import Sports from './src/sport/Sports';
import Map from './src/Map';

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
    },
    Map: {
        screen: Map,
        navigationOptions: {
            title: 'Your sports area'
        }
    }
});

export default App;
