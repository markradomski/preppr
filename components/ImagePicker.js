import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ImagePicker as GetImage } from 'expo';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class ImagePicker extends React.Component {
  state = {
    image: null,
    active: false
  };

  pickImage = async () => {
    const result = await GetImage.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4]
    });

    if (!result.cancelled) {
      this.props.onInput(result.uri);
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Button
          dark
          onPress={this.pickImage}
          style={{
            position: 'absolute',
            bottom: 30,
            right: 20,
            borderRadius: 20,
            height: 40,
            marginRight: 20
          }}
        >
          <Text>+</Text>
        </Button>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, marginLeft: 20 }}
          />
        )}
      </View>
    );
  }
}
