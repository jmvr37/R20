import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {gql} from 'apollo-boost';
import {Query} from 'apollo-boost';
import Session from './Session';
import PropTypes from 'prop-types';
import styles from './styles';
import {useQuery} from '@apollo/react-hooks';
import SpeakerContainer from '../Speaker/SpeakerContainer';
class SessionContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  GroupHour = hour => {
    return new Date(hour).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  render() {
    const {navigation} = this.props;
    const data = navigation.state.params?.item;
    console.log(this.props);

    return (
      <ScrollView>
        <View>
          <Text style={styles.location}>{data?.location}</Text>
        </View>
        <View>
          <Text style={styles.title}>{data?.title}</Text>
        </View>
        <View>
          <Text style={styles.hour}>{this.GroupHour(data?.startTime)}</Text>
        </View>
        <View>
          <Text style={styles.description}>{data?.description}</Text>
        </View>
        <View style={{marginTop: 22}}>
          <View>
            <Text style={{fontSize: 23, color: 'grey', paddingLeft: 15}}>
              Presented by:
            </Text>
          </View>
          <TouchableHighlight
            onPress={() => {
              navigation.push('Speaker', {speakerData: data.speaker});
            }}>
            <View style={styles.speakerInfo}>
              <Image
                source={{uri: data.speaker.image}}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 400 / 2,
                  paddingLeft: 20,
                }}
              />
              <Text style={styles.speakerName}>{data.speaker.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

SessionContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withNavigation(SessionContainer);
