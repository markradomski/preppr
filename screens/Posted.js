import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Posted extends Component {
  static navigationOptions = {
    tabBarLabel: 'Posted'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text />
      </View>
    );
  }
}

export default Posted;
