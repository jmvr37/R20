import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import PropTypes from 'prop-types';

class Session extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
    const {sessios} = data;

    console.log(data);

    return (
      <View>
        <Text>{data.title}</Text>
      </View>
    );
  }
}

Session.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Session;
