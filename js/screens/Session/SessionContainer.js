import React, {useContext} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  TouchableHighlight,
  Button,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {MyContext} from '../../context/FavesContext';

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
    console.log(this.props);

    return (
      <MyContext.Consumer>
        {({faveIds, addFaveSession, removeFaveSession, session}) => {
          const {navigation} = this.props;
          const data = navigation.state.params?.item;

          let heartIcon;

          if (faveIds.indexOf(data.id) === -1) {
            heartIcon = (
              <FontAwesomeIcon icon={faHeart} size={20} color={'white'} />
            );
          } else {
            heartIcon = (
              <FontAwesomeIcon icon={faHeart} size={20} color={'red'} />
            );
          }

          let buttonTitle;

          if (faveIds.indexOf(data.id) === -1) {
            buttonTitle = 'Add Fave';
          } else {
            buttonTitle = 'Remove Fave';
          }
          return (
            <ScrollView>
              <View style={styles.containerLocation}>
                <Text style={styles.location}>{data?.location}</Text>
                <Text style={styles.icon}>{heartIcon}</Text>
              </View>

              <View>
                <Text style={styles.title}>{data?.title}</Text>
              </View>
              <View>
                <Text style={styles.hour}>
                  {this.GroupHour(data?.startTime)}
                </Text>
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
                <View style={styles.border}></View>
                <View style={styles.removeContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    title="Add faves"
                    onPress={() => {
                      console.log(faveIds);
                      if (faveIds.indexOf(data?.id) == -1) {
                        addFaveSession(data?.id);
                      } else {
                        removeFaveSession(data?.id);
                      }
                    }}>
                    <LinearGradient
                      colors={['#7B7DD1', '#874AED']}
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 1}}
                      style={styles.gradient}>
                      <Text style={{fontSize: 25, color: 'white'}}>
                        {buttonTitle}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

SessionContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withNavigation(SessionContainer);
