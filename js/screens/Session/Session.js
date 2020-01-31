import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import PropTypes from 'prop-types';
import SessionContainer from './SessionContainer';

class Session extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return <Text>hi</Text>;
  }
}

Session.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Session;
