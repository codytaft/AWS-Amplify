import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import ApiCall from './ApiCall';
import Form from './Form';

// Amplify.configure(amplify);
Amplify.configure(awsmobile);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>The Amplify Test</Text>
        <ApiCall />
        <Form />
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
