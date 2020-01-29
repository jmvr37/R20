import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Speaker from './Speaker';
import propTypes from 'prop-types';

class SpeakerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

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
                <Text>{data.image}</Text>
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

SpeakerContainer.propTypes = {
  data: propTypes.array.isRequired,
};

export default SpeakerContainer;
