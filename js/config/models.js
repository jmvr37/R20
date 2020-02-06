import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const saveFaves = async faveId => {
  try {
    let existingIds = JSON.parse(await asyncStorage.getItem('faveIds')) || [];
    if (existingIds.indexOf(faveId) === -1) {
      existingIds.push(faveId);
    }
    await AsyncStorage.setItem('faveIds', JSON.stringify('existingIds'));
  } catch (e) {
    throw e;
  }
};

const getFaves = async () => {
  try {
    let faveIds = await asyncStorage.getItem('faveIds');
    return JSON.parse(faveIds);
  } catch (e) {
    throw e;
  }
};

const removeFaves = async faveId => {
  try {
    let existingIds = JSON.parse(await AsyncStorage.getItem('faveIds')) || [];
    let newIds = existingIds.filter(id => {
      id !== faveId;
    });
    await AsyncStorage.setItem('faveIds', JSON.stringify(newIds));
  } catch (e) {
    throw e;
  }
};

export default {
  saveFaves,
  getFaves,
  removeFaves,
};
