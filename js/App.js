import React, {component} from 'react';
import {AboutContainer} from './screens/About';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';
// // import {RootStackNavigator} from './navigation/RootStackNavigator';
import model from './config/models';
import MyContextProvider from './context/FavesContext';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Title,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MyContextProvider>
          <RootStackNavigator />
        </MyContextProvider>
      </ApolloProvider>
    );
  }
}

export default App;
