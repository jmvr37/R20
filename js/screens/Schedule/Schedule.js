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
} from 'react-native';
import ScheduleContainer from './ScheduleContainer';
import {formatData} from './helpers';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  GroupHour = hour => {
    return new Date(hour).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  render() {
    const {data} = this.props;
    const {state} = this.context;
    const sessions = formatData(data);
    console.log(data);
    // const IconComponent = Ionicons;

    return (
      <SectionList
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({item, index, section}) => (
          <TouchableHighlight>
            <View>
              <Text key={index}>{item.title}</Text>
              <View>
                <Text key={index}>{item.location}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text>{this.GroupHour(title)}</Text>
        )}
        sections={sessions.map(({title, data}) => {
          return {title: title, data: data.map(x => x)};
        })}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

Schedule.propTypes = {
  data: propTypes.array.isRequired,
};

export default Schedule;

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
