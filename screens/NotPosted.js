import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class NotPosted extends Component {
  static navigationOptions = {
    tabBarLabel: 'Not Posted'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text />
      </View>
    );
  }
}

export default NotPosted;
