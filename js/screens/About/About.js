import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import styles from './styles';
import ConductItem from '../../components/ConductItem';

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

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
    console.log(data);
    return (
      <ScrollView style={styles.aboutPage}>
        <View style={styles.aboutImage}>
          <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <View>
          <View>
            <Text style={styles.title}>Date Venue</Text>
          </View>
          <Text style={styles.text}>
            The R10 conference will take place on Tuesday, June 27, 2020 in
            Vancouver, BC.
          </Text>
        </View>

        <View>
          {data.map(item => {
            return <ConductItem item={item} />;
          })}
        </View>
      </ScrollView>
    );
  }
}

About.PropTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
