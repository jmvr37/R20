import React, {Component, useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Query} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
// import {ApolloProvider} from '@apollo/react-hooks';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import Faves from './Faves';
import {MyContext} from '../../context/FavesContext';
import {Schedule} from '../Schedule';
import {Maps} from '../Maps';
import models from '../../config/models';

const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      startTime
      title
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

const FavesContainer = () => {
  const {loading, error, data} = useQuery(ALL_SESSIONS);
  const {faveIds, addFaveSession, removeFaveSession} = useContext(MyContext);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  console.log('-------->');
  console.log(faveIds);
  return (
    <Schedule
      addFaveSession={addFaveSession}
      removeFaveSession={removeFaveSession}
      faveIds={faveIds}
      data={data.allSessions.filter(session => faveIds.includes(session.id))}
    />
  );
};

export default FavesContainer;

// const FavesContainer = () => {
//   console.log('faves contaner');
//   return (
//     <MyContext.Consumer>
//       {({faveIds, addFaveSession, removeFaveSession}) => {
//         return (
//           <Query query={ALL_SESSIONS_QUERY}>
//             {({loading, error, data}) => {
//               if (loading) return <Text>Loading...</Text>;
//               if (error) return <Text>Error :(</Text>;
//               return (
//                 <Schedule
//                   addFaveSession={addFaveSession}
//                   removeFaveSession={removeFaveSession}
//                   faveIds={faveIds}
//                   data={data.allSessions.filter(session =>
//                     faveIds.includes(session.id),
//                   )}
//                 />
//               );
//             }}
//           </Query>
//         );
//       }}
//     </MyContext.Consumer>
//   );
// };

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
</MyContext.Consumer>; */
}
