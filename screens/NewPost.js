import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Button,
  Icon,
  Segment,
  StyleProvider,
  TabHeading,
  Tab,
  Tabs,
  Text as TextBase
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

import ImagePicker from '../components/ImagePicker';

import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import Caption from './Caption';
import Comment from './Comment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#fff'
  },
  scheduledTime: {
    paddingLeft: 15,
    width: 600,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  }
});

const stylesheet = {
  colours: {
    tabBackgroundColor: '#f9f9f9',
    headerBackgroundColor: '#fff',
    activeTintColor: '#666666',
    inactiveTintColor: '#787D7F'
  }
};

const SET_DATE = 'SET DATE & TIME';
const SAVE_DRAFT = 'SAVE AS DRAFT';
const ADD_QUEUE = 'ADD TO QUEUE';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'setDate',
      isDateTimePickerVisible: false,
      date: null,
      image: null,
      caption: null,
      comment: null
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = date => {
    console.log('Date', date);
    this.setState({ date: new Date(date) });
    this._hideDateTimePicker();
  };

  onTabPress = tab => {
    const { date } = this.state;
    const { addPost } = this.props;
    if (date) {
      let post = {
        date: this.state.date,
        image: this.state.image,
        caption: this.state.caption,
        comment: this.state.comment
      };
      addPost(post);
    } else {
      this._showDateTimePicker();
    }
  };

  updateCaption = text => {
    this.setState({ caption: text });
  };

  updateComment = text => {
    this.setState({ comment: text });
  };

  updateImage = image => {
    this.setState({ image });
  };

  render() {
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
                <Text>CAPTION</Text>
              </TabHeading>
            }
          >
            <Caption onInput={this.updateCaption} />
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: stylesheet.colours.tabBackgroundColor
                }}
              >
                <Text>COMMENT</Text>
              </TabHeading>
            }
          >
            <Comment onInput={this.updateComment} />
          </Tab>
        </Tabs>
        <ImagePicker onInput={this.updateImage} />
        <View style={styles.scheduledTime}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}
          >
            {this.state.date && (
              <Icon name="ios-time-outline" style={{ marginBottom: 10 }} />
            )}
            <Text
              style={{ fontWeight: 'normal', paddingLeft: 10, paddingTop: 5 }}
            >
              {this.state.date && this.state.date.toString().slice(0, 21)}
            </Text>
          </View>
        </View>
        <StyleProvider style={getTheme(platform)}>
          <Segment
            style={{
              backgroundColor: stylesheet.colours.tabBackgroundColor
            }}
          >
            <Button
              first
              active={this.state.activeTab === 'saveDraft'}
              onPress={() => this.onTabPress('saveDraft')}
            >
              <TextBase>{SAVE_DRAFT}</TextBase>
            </Button>
            <Button
              last
              active={this.state.activeTab === 'setDate'}
              onPress={this.onTabPress}
            >
              <TextBase>{this.state.date ? ADD_QUEUE : SET_DATE}</TextBase>
            </Button>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
          </Segment>
        </StyleProvider>
      </Container>
    );
  }
}
