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
    const data = this.props.navigation.state.params?.item;
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
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <View>
                  <View key={data?.id}>
                    <View>
                      <Image source={data?.image} />
                    </View>
                    <Text>{data?.name}</Text>
                    <Text>{data?.image}</Text>
                    <SpeakerContainer />
                  </View>
                </View>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text> X</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
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

{
  /* <Text>{JSON.stringify(data)}</Text>; */
}
