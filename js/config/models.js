import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const saveFaves = async faveId => {
  try {
    let existingIds = JSON.parse(await AsyncStorage.getItem('faveIds')) || [];
    if (existingIds.indexOf(faveId) === -1) {
      existingIds.push(faveId);
    }
    await AsyncStorage.setItem('faveIds', JSON.stringify(existingIds));
  } catch (e) {
    console.error('SAVE BLEW UP');

    console.error(e);

    throw e;
  }
};

const getFaves = async () => {
  try {
    let faveIds = await AsyncStorage.getItem('faveIds');
    // console.log('fave Ids are ');
    // console.log(JSON.parse(faveIds));
    if (faveIds) return JSON.parse(faveIds);
    return [];
  } catch (e) {
    console.error('GET BLEW UP');

    console.error(e);
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
    console.error('REMOVE BLEW UP');

    console.error(e);
    throw e;
  }
};

export {saveFaves, getFaves, removeFaves};
