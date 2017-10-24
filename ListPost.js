import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Content,
  Left,
  List,
  ListItem,
  Separator,
  Thumbnail,
  Text,
  Body
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    borderBottomWidth: 1
  },
  seperator: {
    height: 60
  },
  seperatorText: {
    fontSize: 16
  },
  time: {
    paddingRight: 30
  },
  thumbnail: {
    paddingRight: 50
  },
  caption: {
    paddingLeft: 20
  }
});

export default class ListPost extends Component {
  render() {
    const { scheduledPosts } = this.props.list;
    return (
      <Container>
        <Content>
          <View>
            <Separator style={styles.seperator}>
              <Text style={styles.seperatorText}>
                Wednesday 18, October 2017 {/* TODO */}
              </Text>
            </Separator>
          </View>
          <List
            dataArray={scheduledPosts}
            renderRow={item => {
              const date = new Date(item.scheduledPost.date);
              const minutes = '' + date.getMinutes();
              const hours = '' + date.getHours();
              const time = `${hours.length === 1
                ? 0 + hours
                : hours}:${minutes.length === 1 ? 0 + minutes : minutes}`;
              return (
                <ListItem style={styles.listItem}>
                  <Left>
                    <Text note style={styles.time}>
                      {time}
                    </Text>
                    <Thumbnail
                      large
                      square
                      size={80}
                      source={{ uri: item.scheduledPost.image }}
                      style={styles.thumbnail}
                    />
                    <Body>
                      <Text note style={styles.caption}>
                        {item.scheduledPost.comment}
                      </Text>
                    </Body>
                  </Left>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
