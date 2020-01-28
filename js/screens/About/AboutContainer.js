// logic fetching data from the API
import React, {Component} from 'react';
import About from './About';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
// import {Query} from '@apollo/react-components';
import {ApolloProvider} from '@apollo/react-hooks';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

const ALL_CONDUCTS = gql`
  query {
    allConducts {
      id
      title
      description
    }
  }
`;

const AboutContainer = () => {
  const {loading, error, data} = useQuery(ALL_CONDUCTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  return (
    <ScrollView>
      <About data={data.allConducts} />
    </ScrollView>
  );
};

export default AboutContainer;
