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
          <Image
            source={{uri: data.image}}
            style={{width: 140, height: 140, borderRadius: 400 / 2}}
          />

          <Text>{data.name}</Text>
          <Text>{data.bio}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

Speaker.propTypes = {
  data: propTypes.array.isRequired,
};

export default withNavigation(Speaker);
