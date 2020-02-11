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
import {formatData} from '../../components/SessionList/helpers';
import styles from './styles';
import Session from '../../screens/Session/';
import {withNavigation} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
// import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
// import {FavesContext} from '../../context/FavesContext.js';
import {models} from '../../config/models';
import {MyContext} from '../../App.js';

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
    const sessions = formatData(data);
    // console.log(data);
    // const IconComponent = Ionicons;

    return (
      <MyContext.Consumer>
        {(faveIds, addFaveSession, removeFaveSession, session, data) => {
          console.log('my context stuff is');
          // console.log(p);
          // let {faveIds, addFaveSession, removeFaveSession} = p;
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
                          if (faveIds.indexOf(session.id) == -1) {
                            addFaveSession(session.id);
                          } else {
                            removeFaveSession(session.id);
                          }
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
        }}
      </MyContext.Consumer>
    );
  }
}

Schedule.propTypes = {
  data: propTypes.array.isRequired,
};

export default withNavigation(Schedule);
