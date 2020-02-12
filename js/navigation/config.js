import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import {
  faArrowLeft,
  faCalendarAlt,
  faHeart,
  faMap,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const Menu = ({navigation}) => {
  const {routeName} = navigation.state;

  return routeName === 'Session' ? (
    <TouchableOpacity
      style={{paddingLeft: 20}}
      onPress={() => navigation.goBack()}>
      <Text>X</Text>
      {/* <FontAwesomeIcon icon={faMap} size={30} color={'white'} /> */}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{paddingLeft: 20}}
      onPress={() => navigation.openDrawer()}>
      {/* <FontAwesomeIcon name={faHeart} size={30} color={'white'} /> */}
    </TouchableOpacity>
  );
};

const GradientHeader = props => (
  <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {},

  ...Platform.select({
    android: {
      headerLeft: () => <Menu navigation={navigation} />,
    },
  }),
});
