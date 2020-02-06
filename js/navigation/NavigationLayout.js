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
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        // let FontAwesomeIcons = iconName;
        let icon;
        if (routeName === 'Schedule') {
          icon = faCalendarAlt;
        } else if (routeName === 'Maps') {
          icon = faMap;
        } else if (routeName === 'Faves') {
          icon = faHeart;
        } else if (routeName === 'About') {
          icon = faExclamationCircle;
        }
        return <FontAwesomeIcon icon={icon} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 12,
        margin: 10,
        // fontFamily: 'Montserrat',
      },
      style: {
        backgroundColor: 'black',
        paddingTop: 8,
      },
      tabStyle: {
        height: 60,
      },
    },
  },
);

export default TabNavigator;
