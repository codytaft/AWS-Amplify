import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Storage } from 'aws-amplify';

export default class Upload extends Component {
  uploadFile = async () => {
    let file = 'My upload text';
    let name = 'myFile.txt';
    const access = { level: 'public' }; // note the access path
    Storage.put(name, file, access);
  };

  render() {
    return (
      <View>
        <Button title='upload-btn' onPress={this.uploadFile} />
      </View>
    );
  }
}
