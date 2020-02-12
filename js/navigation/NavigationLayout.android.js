import {createDrawerNavigator} from 'react-navigation-drawer';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import About from '../screens/About';
import Schedule from '../screens/Schedule';
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
    Schedule: Schedule,
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

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Maps: MapsStack,
    Faves: FavesStack,
    About: AboutStack,
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      drawerIcon: ({focused, horizontal, tintColor}) => {
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

    contentOptions: {
      activeTintColor: style.purple.color,
      inactiveTintColor: style.mediumGrey.color,
      labelStyle: {
        fontSize: 21,
        fontFamily: style.mainFontRegular.fontFamily,
        fontWeight: '600',
      },
    },

    initialRouteName: 'Schedule',
  },
);

// const AppNavigation = Platform.select({
//   ios: () => createAppContainer(BottomNav),
//   android: () => createAppContainer(DrawerNav),
// })();

// export default TabNavigator;
// export default DrawerNav;
