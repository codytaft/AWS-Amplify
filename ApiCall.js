import React, { Component } from 'react';
import Amplify, { API } from 'aws-amplify';

import { Text, View, Button, StyleSheet } from 'react-native';

export default class ApiCall extends Component {
  state = { apiResponse: null };

  async getSample() {
    const path = '/items'; // you can specify the path
    try {
      const apiResponse = await API.get('theList2', path); //replace the API name
      this.setState({ apiResponse });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <Button title='Send Request' onPress={this.getSample.bind(this)} />
        <Text style={styles.text}>
          {this.state.apiResponse &&
            `Response: ` + JSON.stringify(this.state.apiResponse)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#BFBFBF',
    fontSize: 30
  }
});
