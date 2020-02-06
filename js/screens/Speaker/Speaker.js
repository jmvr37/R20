import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Modal,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from 'react-native';
import propTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {data, navigation} = this.props;
    // const data = this.props.navigation.state.params?.item;

    console.log(data);
    console.log('navigation');
    console.log(this.props);

    return (
      <ScrollView>
        <View style={styles.speakerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontSize: 24, color: 'white'}}>X</Text>
          </TouchableOpacity>
          <Text style={styles.About}>About the Speaker</Text>
        </View>

        <View style={styles.infoContainer}>
          <Image
            source={{uri: data.image}}
            style={{
              width: 140,
              height: 140,
              borderRadius: 400 / 2,
            }}
          />
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.bio}>{data.bio}</Text>
          <Text>{data.url}</Text>
          <View style={styles.removeContainer}>
            <TouchableOpacity
              style={styles.button}
              title="Read More on Wikipedia"
              onPress={() => Alert.alert('button pressed')}>
              <LinearGradient
                colors={['#7B7DD1', '#874AED']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}>
                  Read More on Wikipedia
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Speaker.propTypes = {
  data: propTypes.array.isRequired,
};

export default withNavigation(Speaker);
