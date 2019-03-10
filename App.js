import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import amplify from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(amplify);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>The Amplify Test</Text>
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
