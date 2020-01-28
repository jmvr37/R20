import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
const client = new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

export default client;
