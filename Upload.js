import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Storage, Analytics } from 'aws-amplify';

export default class Upload extends Component {
  uploadFile = async () => {
    Analytics.record('Upload-Click');

    let file = 'My upload text';
    let name = 'myFile.txt';
    const access = { level: 'public' }; // note the access path
    Storage.put(name, file, access);
  };

  render() {
    return (
      <View>
        <Button title='Upload' onPress={this.uploadFile} />
      </View>
    );
  }
}
