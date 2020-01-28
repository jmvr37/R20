import React, {Component} from 'react';
//import MapView from 'react-native-maps';

import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Image,
} from 'react-native';
import MapsContainer from './MapsContainer';

onPress = () => {
  LayoutAnimation.spring(); // SHORT-HAND VERSION OF ABOVE LINE
  this.setState({fontSize: this.state.fontSize * 1.25});
};

//ADD CODE ON LINE 39 TO 43 TO TEST THE ANIMATION LAYOUT EXERCISE

export default class App extends Component {
  render() {
    return (
      // <MapView
      //   style={{flex: 1}}
      //   region={{
      //     latitude: 49.246292,
      //     longitude: -123.116226,
      //     latitudeDelta: 0.0922,
      //     longitudeDelta: 0.0421,
      //   }}
      //   showsUserLocation={true}
      // />
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={{fontSize: this.state.fontSize}}>
            this text is inside the schedule page yes
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// class Maps extends React.Component {
//   render() {
//     // return(
//     //     <View>
//     //     <Text> this text is inside the schedule page yes </Text>
//     //     </View>

//     // );
//     return <MapsContainer />;
//   }
// }

// export default Maps;
