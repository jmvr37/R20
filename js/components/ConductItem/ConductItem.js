import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import styles from './styles';

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    const animation = LayoutAnimation.create(400, 'linear', 'opacity');

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    const {item} = this.props;

    return (
      <View>
        <TouchableOpacity
          onPress={this.toggleItem}
          style={styles.buttonAnimation}>
          <Text style={styles.icon}>{this.state.expanded ? '-' : '+'}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        {this.state.expanded && (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>
    );
  }
}

export default ConductItem;
