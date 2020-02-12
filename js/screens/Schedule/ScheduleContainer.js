import React, {Component} from 'react';
import Schedule from './Schedule';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {MyContext} from '../../context/FavesContext';

const ALL_SESSIONS = gql`
  query {
    allSessions {
      id
      title
      location
      startTime
      description
      speaker {
        id
        name
        image
        bio
      }
    }
  }
`;

const ScheduleContainer = () => {
  const {loading, error, data} = useQuery(ALL_SESSIONS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  return <Schedule data={data.allSessions} />;
};

export default ScheduleContainer;

{
  /* const {loading, error, data} = useQuery(All_SESSIONS);  */
}
{
  /* <MyContext.Consumer>
      {({faveIds, addFaveSession, removeFaveSession}) => {
        <Query query={ALL_SESSIONS_QUERY}>
          {({loading, error, data}) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :(</Text>;
            return (
              <Schedule
                addFaveSession={addFaveSession}
                removeFaveSession={removeFaveSession}
                faveIds={faveIds}
                data={data.allSessions.filter(session =>
                  faveIds.includes(session.id),
                )}
              />
            );
          }}
        </Query>;
      }}
    </MyContext.Consumer> */
}
