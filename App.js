import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { Storage } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import ApiCall from './ApiCall';
import Form from './Form';
import Upload from './Upload';

// Amplify.configure(amplify);
Amplify.configure(awsmobile);

class App extends React.Component {
  componentDidMount = async () => {
    const path = this.props.path;
    const access = { level: 'public' };
    let files = await Storage.list(path, access);
    // use file list to get single files
  };

  getFile = async () => {
    let name = 'myFile.txt';
    const access = { level: 'public' };
    let fileUrl = await Storage.get(name, access);
    // use fileUrl to get the file
  };

  deleteFile = async key => {
    const access = { level: 'public' };
    Storage.remove(key, access);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>The Amplify Test</Text>
        <ApiCall />
        <Form />
        <Upload />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#BFBFBF',
    fontSize: 30
  }
});

export default withAuthenticator(App);
