import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// let favesIds = [1, 2, 3, 4, 5];

// let obj = {
//   id: 1,
//   name: 'event',
//   time: '10',
// };
// AsyncStorage.setItem('id',JSON.stringify(favesIds));
// AsyncStorage.removeItem('id',JSON.stringify(favesIds));

// const saveData = async (obj) => {
//   try {
//     await AsyncStorage.setItem('faveIds', JSON.stringify('faveIds'));
//   } catch (e) {
//     throw e;
//   }
//   const result = await AsyncStorage.getItem('faveIds');

//   console.log(JSON.parse(result).value);
// };

// const removeData = async () => {
//   try {
//     await AsyncStorage.removeItem('thisIsaKey,', JSON.stringify({value: 'hi'}));
//     const remove = await AsyncStorage.removeItem('thisIsaKey');
//   } catch (e) {
//     throw e;
//   }
//   console.log(JSON.parse(remove).value);
// };

// export default {
//   saveData,
//   removeData,
// };

const setFave = async obj => {
  try {
    let IdArr = {};
    IdArr.value = obj;
    await AsyncStorage.setItem('AS_faveIds', JSON.stringify(IdArr));
  } catch (e) {
    console.log(e);
  }
};

export default {
  setFave,
};
