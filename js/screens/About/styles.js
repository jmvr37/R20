import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboutImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'center',
  },

  aboutPage: {
    padding: 20,
    height: '100%',
  },

  text: {
    fontSize: 10,
    lineHeight: 25,
    paddingBottom: 10,
    fontWeight: '100',
    color: 'red',
  },
  title: {
    fontSize: 40,
    fontWeight: '400',
    paddingBottom: 30,
    lineHeight: 25,
    maxHeight: 'auto',
  },
});

export default styles;
