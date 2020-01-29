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
} from 'react-native';
import ScheduleContainer from './ScheduleContainer';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  Hour = startTime => {
    return (
      <View>
        <Text>{startTime}</Text>
      </View>
    );
  };

  groupHour = hour => {
    return new Date(hour).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  render() {
    const {data} = this.props;
    const {state} = this.context;
    console.log(data);

    return (
      <ScrollView>
        <View>
          {data.map(data => {
            return (
              <View key={data.id}>
                <Text>{data.title}</Text>
                <Text>{data.location}</Text>
                <Text>{data.startTime}</Text>
              </View>
            );
          })}
        </View>{' '}
      </ScrollView>
    );
  }
}

Schedule.propTypes = {
  data: propTypes.array.isRequired,
};

export default Schedule;
