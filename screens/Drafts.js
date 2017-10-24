import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

class Drafts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Drafts',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-document-outline"
        size={50}
        color={tintColor}
        type="ionicon"
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Drafts</Text>
      </View>
    );
  }
}

export default Drafts;
