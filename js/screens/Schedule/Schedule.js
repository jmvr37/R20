import React, {useEffect, useState, useContext} from 'react';
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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
// import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {FavesContext} from '../../context/FavesContext.js';
import {models} from '../../config/models';

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
    const {faveIds, setFaveIds} = useContext;
    const sessions = formatData(data);
    // const [faveIds, setFaveIds] = useContext(FavesContext);
    console.log(faveIds);
    // console.log(data);
    // const IconComponent = Ionicons;

    return (
      <SectionList
        ItemSeparatorComponent={this.separator}
        renderItem={({item, index, section}) => (
          <TouchableHighlight
            onPress={() => {
              if (item.title == 'Lunch' || item.title == 'After Party') {
                return;
              } else {
                this.props.navigation.push('Session', {item});
              }
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
                    if (faveIds.indexOf(item.id) == -1) {
                      setFaveIds([...faveIds, item.id]);
                    }
                    models.setFave([...faveIds, item.id]);
                    setFaveIds([]);
                  }}>
                  <View style={styles.icon}>
                    <FontAwesomeIcon icon={faHeart} color={'red'} />
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

export default withNavigation(Schedule);
