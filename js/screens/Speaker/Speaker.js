import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';
import propTypes from 'prop-types';
import {withNavigation} from 'react-navigation';

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
    const {data} = this.props;
    // const data = this.props.navigation.state.params?.item;

    console.log(data);

    return (
      <ScrollView>
        <View>
          {data.map(data => {
            return (
              <View key={data.id}>
                <View>
                  <Image source={data.image} />
                </View>
                <Text>{data.name}</Text>
                <Text>{data.bio}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

Speaker.propTypes = {
  data: propTypes.array.isRequired,
};

export default Speaker;

{
  /* <View style={{marginTop: 22}}>
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
        <View key={data.id}>
          <View>
            <Image source={data.image} />
          </View>
          <Text>{data.image}</Text>
          <Text>{data.name}</Text>
          <Text>{data.bio}</Text>
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
</View> */
}
