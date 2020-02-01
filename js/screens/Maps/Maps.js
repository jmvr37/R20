import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {map_pin} from '../../assets/images/map_pin.png';
import Marker from 'react-native-maps';

const marker = {
  latlng: {
    latitude: 49.263551,
    longitude: -123.138128,
  },
};

class Maps extends React.Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 49.246292,
          longitude: -123.116226,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        <Marker
          coordinate={marker.latlng}
          image={require('../../assets/images/map_pin.png')}
        />
      </MapView>
    );
  }
}

export default Maps;
