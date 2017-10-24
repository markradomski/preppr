import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListPost from '../components/ListPost';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Scheduled extends Component {
  static navigationOptions = {
    tabBarLabel: 'Scheduled'
  };

  render() {
    const { scheduledPosts, addPost } = this.props;
    return (
      <ScrollView style={styles.container}>
        <ListPost list={scheduledPosts} />
      </ScrollView>
    );
  }
}

export default Scheduled;
