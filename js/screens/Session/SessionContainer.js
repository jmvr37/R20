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

  render() {
    console.log(this.props);
    // const {navigation} = this.props;

    // const infoSession = this.props.navigation.getParam('item');
    // console.log('ppp' + JSON.stringify(infoSession));

    return <Text>{JSON.stringify(this.props)}</Text>;
  }
}

export default withNavigation(SessionContainer);
