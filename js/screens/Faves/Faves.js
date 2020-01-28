import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Image,
} from 'react-native';
import FavesContainer from './FavesContainer';
import models from '../../config/models';

class Faves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    async () => {
      await models.set('faveIds');
      const response = await models.get('faveIds');
      this.setState({data: response});
    };
  }

  render() {
    return (
      <View>
        <Text> faves are: {this.state.data}</Text>
      </View>
    );
    // return <FavesContainer />;
  }
}

export default Faves;
