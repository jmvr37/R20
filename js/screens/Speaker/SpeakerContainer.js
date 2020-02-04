import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Speaker from './Speaker';

const GET_SPEAKERS = gql`
  query {
    allSpeakers {
      id
      bio
      image
      name
      session {
        id
      }
      url
    }
  }
`;

const SpeakerContainer = ({navigation}) => {
  console.log(navigation.state.params);
  const {loading, error, data} = useQuery(GET_SPEAKERS);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <ScrollView>
      <Speaker data={navigation.state.params.speakerData} />
    </ScrollView>
  );
};

export default SpeakerContainer;
