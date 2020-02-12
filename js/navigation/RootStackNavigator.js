import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationLayout from './NavigationLayout.ios';
import Speaker from '../screens/Speaker';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: Speaker,
    },
    {
      mode: 'modal',
      headerMode: 'none',
    },
  ),
); // navigationLAyout page
