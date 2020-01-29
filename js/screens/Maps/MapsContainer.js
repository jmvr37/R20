import React, {Component} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import Maps from './Maps';

class MapsContainer extends React.Component {
  render() {
    return <Maps />;
  }
}

export default MapsContainer;
