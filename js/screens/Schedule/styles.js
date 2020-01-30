import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  groupsHour: {
    backgroundColor: '#e6e6e6',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },

  title: {
    fontSize: 22,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  },

  location: {
    fontSize: 16,
    color: '#999999',
    paddingBottom: 15,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default styles;

// const design = {
//   colors: {
//     darkGrey: '#535c68',
//     MediumGrey: '#999999',
//     LightGrey: '#e6e6e6',
//     Blue: '#8797D6',
//     Purple: '#9963ea',
//     Red: '#cf392a',
//   },
//   fonts: {
//     primary: 'Montserrat',
//     secundary: 'Montserrat-Light',
//   },
//   buttonStyle: ['#9963ea', '#3b5998', '#192f6a'],
// };

// export default design;
