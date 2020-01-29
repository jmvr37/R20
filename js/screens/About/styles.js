import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboutImage: {
    paddingTop: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  aboutPage: {
    padding: 20,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  text: {
    fontSize: 25,
    lineHeight: 25,
    paddingBottom: 10,
    fontWeight: '400',
    color: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    lineHeight: 25,
    maxHeight: 'auto',
  },
});

export default styles;
