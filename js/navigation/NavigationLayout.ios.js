import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import About from '../screens/About';
import {ScheduleContainer} from '../screens/Schedule';
import Faves from '../screens/Faves';
import Maps from '../screens/Maps';
import {sharedNavigationOptions} from './config';
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
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleContainer,
    Session: Session,
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: {
      screen: Faves,
    },
    Session: Session,
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
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
      ...sharedNavigationOptions(navigation),
    }),
  },
);

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

// const AppNavigation = Platform.select({
//   ios: () => createAppContainer(BottomNav),
//   android: () => createAppContainer(DrawerNav),
// })();

export default TabNavigator;
// export default DrawerNav;
