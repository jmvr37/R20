import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  speakerContainer: {
    paddingTop: 100,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    paddingBottom: 20,
    paddingTop: 40,
  },
  bio: {
    fontSize: 20,
    lineHeight: 30,
  },
  close: {
    paddingTop: 30,
  },
  About: {
    paddingLeft: 80,
    fontSize: 24,
    paddingBottom: 30,
    color: 'white',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  removeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    width: '100%',
    height: 60,
  },
});

export default styles;
