import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

class Media extends Component {
  static navigationOptions = {
    tabBarLabel: 'Media',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-camera-outline"
        size={50}
        color={tintColor}
        type="ionicon"
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Media</Text>
      </View>
    );
  }
}

export default Media;
