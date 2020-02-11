import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import PropTypes from 'prop-types';
import SessionContainer from './SessionContainer';

const Session = () => {
  //   constructor(props) {
  //     super(props);
  //   }
  {
    return (
      <View>
        <SessionContainer />
      </View>
    );
  }
};

Session.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Session;
