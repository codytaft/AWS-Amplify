import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class ApiCall extends Component {
  state = { apiResponse: null };

  async getSample() {
    const path = '/items'; // you can specify the path
    const apiResponse = await API.get('theListApi', path); //replace the API name
    console.log('response:' + apiResponse);
    this.setState({ apiResponse });
  }

  render() {
    return (
      <View>
        <Button title='Send Request' onPress={this.getSample.bind(this)} />
        <Text style={styles.text}>
          Response:
          {this.state.apiResponse && JSON.stringify(this.state.apiResponse)}
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
