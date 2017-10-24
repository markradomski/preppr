import * as Expo from 'expo';
import React from 'react';
import { Container } from 'native-base';

import FooterTabBar from '../components/Footer';
import posts from '../config/data.json';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      schPosts: {}
    };

    this.addPost = this.addPost.bind(this);
  }

  componentWillMount() {
    this.loadFonts();
    this.setState({ schPosts: posts });
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ isLoading: false });
  }

  addPost(post) {
    const __posts = this.state.schPosts.scheduledPosts;
    __posts.unshift({ scheduledPost: post });
    this.setState({ schPosts: { scheduledPosts: __posts } });
  }

  render() {
    if (this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <FooterTabBar
          scheduledPosts={this.state.schPosts}
          addPost={this.addPost}
        />
      </Container>
    );
  }
}
