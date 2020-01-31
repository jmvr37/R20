import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {gql} from 'apollo-boost';
import {Query} from 'apollo-boost';
import Session from './Session';
import PropTypes from 'prop-types';
import styles from './styles';

class SessionContainer extends React.Component {
  constructor(props) {
    super(props);
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
