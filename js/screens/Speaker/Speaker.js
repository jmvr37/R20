import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import propTypes from 'prop-types';

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
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

Speaker.propTypes = {
  data: propTypes.array.isRequired,
};

export default Speaker;
