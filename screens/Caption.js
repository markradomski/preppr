import React, { Component } from 'react';
import { View } from 'react-native';
import { InputGroup, Input } from 'native-base';

export default class Caption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <InputGroup borderType="regular">
          <Input
            textAlignVertical={'top'}
            style={{
              width: 200,
              height: 120,
              paddingLeft: 20,
              paddingTop: 20
            }}
            multiline={true}
            placeholder="type your notes or captions here"
            onChangeText={evt => this.props.onInput(evt)}
          />
        </InputGroup>
      </View>
    );
  }
}
