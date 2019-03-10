import React, { Component } from 'react';
import Amplify, { API } from 'aws-amplify';

import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default class Form extends Component {
  state = {
    apiResponse: null,
    noteId: ''
  };

  handleChangeNoteId = event => {
    this.setState({ noteId: event });
  };

  // Create a new Note according to the columns we defined earlier
  saveNote = async () => {
    let newNote = {
      body: {
        NoteTitle: 'My first note!',
        NoteContent: 'This is so cool!',
        NoteId: this.state.noteId
      }
    };
    const path = '/Notes';

    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.put('NotesCRUD', path, newNote);
      console.log('response from saving note: ' + apiResponse);
      this.setState({ apiResponse });
    } catch (e) {
      console.log(e);
    }
  };

  // noteId is the primary key of the particular record you want to fetch
  getNote = async () => {
    const path = '/Notes/object/' + this.state.noteId;
    try {
      const apiResponse = await API.get('NotesCRUD', path);
      console.log('response from getting note: ' + apiResponse);
      this.setState({ apiResponse });
    } catch (e) {
      console.log(e);
    }
  };

  // noteId is the NoteId of the particular record you want to delete
  deleteNote = async () => {
    const path = '/Notes/object/' + this.state.noteId;
    try {
      const apiResponse = await API.del('NotesCRUD', path);
      console.log('response from deleteing note: ' + apiResponse);
      this.setState({ apiResponse });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Response:
          {this.state.apiResponse && JSON.stringify(this.state.apiResponse)}
        </Text>
        <Button title='Save Note' onPress={this.saveNote} />
        <Button title='Get Note' onPress={this.getNote} />
        <Button title='Delete Note' onPress={this.deleteNote} />
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          onChangeText={this.handleChangeNoteId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  textInput: {
    margin: 15,
    height: 30,
    width: 200,
    borderWidth: 1,
    color: 'green',
    fontSize: 20,
    backgroundColor: 'black'
  }
});
