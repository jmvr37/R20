import React, {Component} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import Faves from './Faves';

class FavesContainer extends React.Component {
  render() {
    return <Faves />;
    // return <Text> this text is inside the faves container </Text>;
  }
}

export default FavesContainer;
