import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';

export default function MapFeature() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    pitch: 45,
  });
  const [locationName, setLocationName] = useState('');

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      pitch: 45,
    });

    const reverseGeocode = await LocationGeocoding.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    if (reverseGeocode.length > 0) {
      const addressComponents = reverseGeocode[0];
      let locationName = '';

      if (addressComponents.street) {
        locationName += addressComponents.street + ', ';
      }
      if (addressComponents.city) {
        locationName += addressComponents.city + ', ';
      }
      if (addressComponents.region) {
        locationName += addressComponents.region + ', ';
      }
      if (addressComponents.country) {
        locationName += addressComponents.country;
      }

      setLocationName(locationName || 'Unknown Location');
    }

    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} pinColor='black'>
          <Callout>
            <Text>You're Here!</Text>
            <Text>Location: {locationName}</Text>
          </Callout>
        </Marker>
      </MapView>
      <Button title="Get Location" onPress={userLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
  },
});
