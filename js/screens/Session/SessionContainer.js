import React from 'react';
import {Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import {gql} from 'apollo-boost';
import {Query} from 'apollo-boost';
import Session from './Session';

class SessionContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  // const item = navigation.getParam('item');
  // console.log(item);
  render() {
    const {navigation} = this.props;
    const infoSession = navigation.getParam('infoSession');

    return <Session />;
  }
}

export default withNavigation(SessionContainer);
