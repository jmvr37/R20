import React from 'react';
import {Text} from 'react-native';
import {withNavigation} from 'react-navigation';

const Session = ({navigation}) => {
  const item = navigation.getParam('item');
  console.log('1' + item);
  //   console.log('2' + navigation);

  return (
    <>
      <Text>This is the session page: </Text>
      <Text>{item}</Text>
    </>
  );
};

export default withNavigation(Session);
