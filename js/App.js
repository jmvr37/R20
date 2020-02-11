import React, {component} from 'react';
import {AboutContainer} from './screens/About';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';
// // import {RootStackNavigator} from './navigation/RootStackNavigator';
import {saveFaves, getFaves, removeFaves} from './config/models';

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

let MyContext = React.createContext();

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  async componentDidMount() {
    console.log('------->');
    console.log(getFaves);
    console.log('------->');

    let faveIds = await getFaves();
    this.setState({faveIds});
  }

  addFaveSession = async sessionId => {
    await saveFaves(sessionId);
    let newFaves = await getFaves();
    this.setState({faveIds: newFaves});
  };

  removeFaveSession = async sessionId => {
    await removeFaves(sessionId);
    let newFaves = await getFaves();
    this.setState({faveIds: newFaves});
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <MyContext.Provider
          value={{
            addFaveSession: this.addFaveSession,
            removeFaveSession: this.removeFaveSession,
            faveIds: this.state.faveIds,
          }}>
          <RootStackNavigator />
        </MyContext.Provider>
      </ApolloProvider>
    );
  }
}

export default App;
export {MyContext};
