import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, TabHeading, Tab, Tabs } from 'native-base';

import Scheduled from '../screens/Scheduled';
import Posted from '../screens/Posted';
import NotPosted from '../screens/NotPosted';

const stylesheet = {
  colours: {
    tabBackgroundColor: '#f9f9f9',
    headerBackgroundColor: '#fff',
    activeTintColor: '#666666',
    inactiveTintColor: '#787D7F'
  }
};

export default class Queue extends Component {
  render() {
    const { scheduledPosts, addPost } = this.props;
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={{
            height: 1
          }}
        >
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: stylesheet.colours.tabBackgroundColor
                }}
              >
                <Text>Scheduled</Text>
              </TabHeading>
            }
          >
            <Scheduled scheduledPosts={scheduledPosts} addPost={addPost} />
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: stylesheet.colours.tabBackgroundColor
                }}
              >
                <Text>Posted</Text>
              </TabHeading>
            }
          >
            <Posted />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
