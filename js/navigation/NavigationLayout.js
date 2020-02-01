import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import About from '../screens/About';
import Schedule from '../screens/Schedule';
import Faves from '../screens/Faves';
import Maps from '../screens/Maps';
import {NavigationHeader} from './config';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Speaker from '../screens/Speaker';
import Session from '../screens/Session';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarAlt,
  faHeart,
  faMap,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const AboutStack = createStackNavigator(
  {
    About: {
      screen: About,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const SessionStack = createStackNavigator(
  {
    Session: {
      screen: Session,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule,
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: {
      screen: Faves,
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const MapsStack = createStackNavigator(
  {
    Maps: {
      screen: Maps,
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const SpeakerStack = createStackNavigator(
  {
    Speaker: {
      screen: Speaker,
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

// Dedicated stacks for Schedule and Faves will go here too!
// export default createBottomTabNavigator(AboutStack);
// export createbottomnavition

const TabNavigator = createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Maps: MapsStack,
    Faves: FavesStack,
    About: AboutStack,
    Speaker: SpeakerStack,
    Session: SessionStack,
  },

  {
    // defaultNavigationOptions: ({navigation}) => ({
    //   tabBarIcon: ({tintColor}) => {
    //     const {routeName} = navigation.state;
    //     let FontAwesomeIcons = FontAwesomeIcon;
    //     let iconName;
    //     if (routeName === 'Schedule') {
    //       iconName = 'faCalendarAlt';
    //     } else if (routeName === 'Map') {
    //       iconName = 'faMap';
    //     } else if (routeName === 'Faves') {
    //       iconName = 'ios-heart';
    //     } else if (routeName === 'About') {
    //       iconName = 'ios-information-circle';
    //     }
    //     return (
    //       <FontAwesomeIcons
    //         iconName={faCalendarAlt}
    //         size={25}
    //         color={tintColor}
    //       />
    //     );
    //   },
    // }),

    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 15,
        // fontFamily: 'Montserrat',
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },
);

export default TabNavigator;
