import { createStackNavigator } from 'react-navigation';
import Login from './src/login';
import Sport from './src/sport/sport';
import MapScreen from './src/location/map-screen';
import Country from './src/country';
import Register from './src/register';

const App = createStackNavigator({
    Home: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Sport: {
        screen: Sport,
        navigationOptions: {
            title: 'Sports'
        }
    },
    MapScreen: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Your sports area'
        }
    },
    Country: {
        screen: Country,
        navigationOptions: {
            title: 'Location'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Registration'
        }
    }
});

export default App;
