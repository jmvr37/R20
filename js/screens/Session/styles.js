import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  location: {
    fontSize: 22,
    color: '#999999',
    paddingBottom: 15,
    paddingLeft: 15,
    paddingTop: 25,
  },

  title: {
    fontSize: 35,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 15,
    fontWeight: 'bold',
  },

  hour: {
    fontSize: 20,
    paddingLeft: 15,
    paddingBottom: 15,
    color: 'red',
  },

  description: {
    fontSize: 25,
    paddingLeft: 15,
    fontWeight: '300',
    lineHeight: 35,
  },
  speakerInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 30,
  },
  speakerName: {
    fontSize: 24,
    paddingLeft: 15,
    paddingTop: 20,
  },
});

export default styles;
