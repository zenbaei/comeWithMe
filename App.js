import { createStackNavigator } from 'react-navigation';
import Login from './src/Login';
import Sport from './src/sport/Sport';
import Map from './src/location/Map';
import Country from './src/Country';
import Register from './src/Register';

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
    Map: {
        screen: Map,
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
            title: 'Registeration'
        }
    }
});

export default App;
