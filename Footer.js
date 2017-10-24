import * as Expo from 'expo';
import React from 'react';
import { Icon } from 'react-native-elements';
import { Container, StyleProvider, Tab, Tabs, TabHeading } from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import NewPost from '../screens/NewPost';
import Media from '../screens/Media';
import Queue from '../screens/Queue';
import Drafts from '../screens/Drafts';
import Settings from '../screens/Settings';

const styles = {
  colours: {
    tabBackgroundColor: '#f9f9f9',
    headerBackgroundColor: '#fff',
    activeTintColor: '#666666',
    inactiveTintColor: '#787D7F'
  }
};

export default class FooterTabBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ isLoading: false });
  }

  render() {
    const { scheduledPosts, addPost } = this.props;
    if (this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Tabs tabBarPosition="bottom" tabBarUnderlineStyle={{ width: 0 }}>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: styles.colours.tabBackgroundColor
                  }}
                >
                  <Icon
                    name="ios-list-outline"
                    size={30}
                    color={styles.colours.inactiveTintColor}
                    type="ionicon"
                  />
                </TabHeading>
              }
            >
              <Queue scheduledPosts={scheduledPosts} />
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: styles.colours.tabBackgroundColor
                  }}
                >
                  <Icon
                    name="ios-camera-outline"
                    size={30}
                    color={styles.colours.inactiveTintColor}
                    type="ionicon"
                  />
                </TabHeading>
              }
            >
              <Media />
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: styles.colours.tabBackgroundColor
                  }}
                >
                  <Icon
                    name="ios-add-circle"
                    size={40}
                    color="#FFB6FB"
                    type="ionicon"
                    containerStyle={{ padding: 0, margin: 0 }}
                    iconStyle={{ paddingTop: 0 }}
                  />
                </TabHeading>
              }
            >
              <NewPost addPost={addPost} />
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: styles.colours.tabBackgroundColor
                  }}
                >
                  <Icon
                    name="ios-document-outline"
                    size={30}
                    color={styles.colours.inactiveTintColor}
                    type="ionicon"
                  />
                </TabHeading>
              }
            >
              <Drafts />
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: styles.colours.tabBackgroundColor
                  }}
                >
                  <Icon
                    size={30}
                    name="ios-settings-outline"
                    type="ionicon"
                    color={styles.colours.inactiveTintColor}
                  />
                </TabHeading>
              }
            >
              <Settings />
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    );
  }
}
