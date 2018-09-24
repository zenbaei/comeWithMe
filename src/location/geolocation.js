import { PermissionsAndroid } from 'react-native';
import Log from '../util/Log';

export const CurrentLocation = (callback) => {
    requestLocationPermission().then(
        () => {
            navigator.geolocation.getCurrentPosition(callback,
                (err) => {
                    Log.error('Geolocation.getCurrentPosition', err);
                },
               // { enableHighAccuracy: true, timeout: 10000, maximumAge: 3600000 }
            );
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
            alert('Permission rejected');
        }
    } catch (err) {
        alert('There is a problem with permission granting');
        Log.error('Requset location permmision', err);
    }
}

export function regionFrom(lat, lon, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
        latitude: lat,
        longitude: lon,
        latitudeDelta: Math.max(0, latDelta),
        longitudeDelta: Math.max(0, lonDelta)
    };
} 