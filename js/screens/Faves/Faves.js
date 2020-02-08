import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Image,
} from 'react-native';
import FavesContainer from './FavesContainer';
import models from '../../config/models';
import Schedule from '../Schedule/Schedule';

const Faves = ({data, faveIds, addFaveSession, removeFaveSession}) => {
  return (
    <ScrollView>
      <View>
        <Schedule
          addFaveSession={addFaveSession}
          removeFaveSession={removeFaveSession}
          faveIds={faveIds}
          data={data}
        />
      </View>
    </ScrollView>
  );
};

export default Faves;

// class Faves extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//     };
//   }

//   componentDidMount() {
//     async () => {
//       await models.set('faveIds');
//       const response = await models.get('faveIds');
//       this.setState({data: response});
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text> faves are: {this.state.data}</Text>
//       </View>
//     );
//     // return <FavesContainer />;
//   }
// }

// export default Faves;
