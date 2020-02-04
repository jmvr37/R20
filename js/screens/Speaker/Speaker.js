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
          {/* {data.map(data => {
            return (
              <View key={data.id}>
                <View>
                  <Image source={data.image} />
                </View>
                <View>
                  <Text style={styles.name}>{data.name}</Text>
                  <Text style={styles.bio}>{data.bio}</Text>

                  <Text>{data.url}</Text>
                </View>
              </View>
            );
          })} */}
          <Text>Hellllooooo</Text>
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
