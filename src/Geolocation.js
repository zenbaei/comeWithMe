import { PermissionsAndroid } from 'react-native';


export const CurrentLocation = () => {
    requestLocationPermission().then(
        () => {
            Geolocation.getCurrentPosition((position) => {
                alert(position);
                //return Promise.resolve(position);
            })
        });
}

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Location Permission',
                'message': 'Come With Me wants to use your current location'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return Promise.resolve();
        } else {
            alert('rejected');
        }
    } catch (err) {
        alert(err);
    }
}