import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboutImage: {
    paddingTop: 10,
    paddingBottom: 40,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },

  aboutPage: {
    padding: 20,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  text: {
    fontSize: 20,
    lineHeight: 30,
    paddingBottom: 30,
    fontWeight: '400',
    color: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 0,
    lineHeight: 25,
    maxHeight: 'auto',
    paddingBottom: 30,
    paddingTop: 10,
  },
  desc: {
    fontSize: 20,
  },
  border: {
    borderBottomWidth: 3,
    borderBottomColor: '#ededed',
    height: 30,
  },
});

export default styles;
