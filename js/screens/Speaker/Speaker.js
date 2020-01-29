import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import SpeakerContainer from './SpeakerContainer';
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

const Speaker = () => {
  const {loading, error, data} = useQuery(GET_SPEAKERS);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <ScrollView>
      <SpeakerContainer data={this.State.data.allSpeakers} />
    </ScrollView>
  );
};

export default Speaker;
