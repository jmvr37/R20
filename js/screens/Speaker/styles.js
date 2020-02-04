import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  speakerContainer: {
    paddingTop: 100,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    paddingBottom: 20,
    paddingTop: 40,
  },
  bio: {
    fontSize: 15,
    paddingBottom: 30,
  },
  close: {
    paddingTop: 30,
  },
});

export default styles;
