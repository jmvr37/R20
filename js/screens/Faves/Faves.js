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
        // addFaveSession={addFaveSession}
        // removeFaveSession={removeFaveSession}
        // faveIds={faveIds}
        // data={data}
        />
      </View>
    </ScrollView>
  );
};

export default Faves;
