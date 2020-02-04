import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  Image,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import ScheduleContainer from './ScheduleContainer';
import {formatData} from './helpers';
import styles from './styles';
import Session from '../../screens/Session/';
import {withNavigation} from 'react-navigation';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faHeart} from '@fortawesome/free-solid-svg-icons';
// import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  GroupHour = hour => {
    return new Date(hour).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  separator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    const {data} = this.props;
    const {state} = this.context;
    const sessions = formatData(data);
    console.log(data);
    // const IconComponent = Ionicons;

    return (
      <SectionList
        ItemSeparatorComponent={this.separator}
        renderItem={({item, index, section}) => (
          <TouchableHighlight
            onPress={() => {
              // console.log('item' + JSON.stringify(item));
              this.props.navigation.push('Session', {item});
            }}>
            <View>
              <Text key={index} style={styles.title}>
                {item.title}
              </Text>
              <View style={styles.locationContainer}>
                <Text key={index} style={styles.location}>
                  {item.location}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // setFaveIds([])
                  }}>
                  <View style={styles.icon}>
                    <Text>heart icon</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.groupsHour}>{this.GroupHour(title)}</Text>
        )}
        sections={sessions.map(({title, data, name, image}) => {
          return {
            title: title,
            data: data.map(x => x),
            name: name,
            image: image,
          };
        })}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

Schedule.propTypes = {
  data: propTypes.array.isRequired,
};

// export default Schedule;
export default withNavigation(Schedule);
//

// onPress={() =>
//   this.props.navigation.navigate('Sessions', {
//     infoSession: item,
//   })
// }

// {item.favorite && (
//   <IconComponent
//     name={`ios-heart`}
//     size={20}
//     color={design.colors.Red}
//   />
// )}

// return (
//   <SectionList
//     ItemSeparatorComponent={this.renderSeparator}
//     renderItem={({item, index, section}) => (
//       <TouchableHighlight>
//         <View>
//           <Text key={index}>{item.title}</Text>
//           <View>
//             <Text key={index}>{item.location}</Text>
//           </View>
//         </View>
//       </TouchableHighlight>
//     )}
//     renderSectionHeader={({section: {title}}) => (
//       <Text>{this.renderGroupHour(title)}</Text>
//     )}
//     sections={sessions.map(({title, data}) => {
//       return {title: title, data: data.map(x => x)};
//     })}
//     keyExtractor={(item, index) => item + index}
//   />
// );

{
  /* <Text>{this.renderGroupHour(title)}</Text>; */
}
