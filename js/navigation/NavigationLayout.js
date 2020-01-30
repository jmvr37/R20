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

const AboutStack = createStackNavigator(
  {
    About: About,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const SessionStack = createStackNavigator(
  {
    Session: Session,
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
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: Faves,
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const MapsStack = createStackNavigator(
  {
    Maps: Maps,
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...NavigationHeader(navigation),
    }),
  },
);

const SpeakerStack = createStackNavigator(
  {
    Speaker: Speaker,
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
    //     let IconComponent = Ionicons;
    //     let iconName;
    //     if (routeName === 'Schedule') {
    //       iconName = 'ios-calendar';
    //     } else if (routeName === 'Map') {
    //       iconName = 'ios-map';
    //     } else if (routeName === 'Faves') {
    //       iconName = 'ios-heart';
    //     } else if (routeName === 'About') {
    //       iconName = 'ios-information-circle';
    //     }
    //     return <IconComponent name={iconName} size={25} color={tintColor} />;
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
