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

const ScheduleStack = createStackNavigator(
  {
    Schedule: Schedule,
    Session: Session,
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
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <FontAwesomeIcon icon={faHeart} color={tintColor} size={30} />
        ),
      },
    },
  },

  // {
  //   defaultNavigationOptions: ({navigation}) => ({
  //     ...NavigationHeader(navigation),
  //   }),
  // },
);

const MapsStack = createStackNavigator(
  {
    Maps: {
      screen: Maps,
      tabBarIcon: ({tintColor}) => (
        <FontAwesomeIcon icon={faMap} color={tintColor} size={30} />
      ),
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
  },

  {
    // defaultNavigationOptions: ({navigation}) => ({
    //   tabBarIcon: ({tintColor}) => {
    //     const {routeName} = navigation.state;
    //     let FontAwesomeIcons = iconName;
    //     // let iconName = icon;
    //     if (routeName === 'Schedule') {
    //       iconName = 'faCalendarAlt';
    //     } else if (routeName === 'Map') {
    //       iconName = 'faMap';
    //     } else if (routeName === 'Faves') {
    //       iconName = 'ios-heart';
    //     } else if (routeName === 'About') {
    //       iconName = 'ios-information-circle';
    //     }
    //     return <FontAwesomeIcons size={25} color={tintColor} />;
    //   },
    // }),

    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 15,
        margin: 10,
        // fontFamily: 'Montserrat',
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },
);

export default TabNavigator;
