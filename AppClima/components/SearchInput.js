import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default class SearchInput extends React.Component {
  state = {
    text: '',
  };

  handleSubmitEditing = (_) => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    if (!text) return;
    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeholder}
          placeholderTextColor="white"
          value={text}
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    height: 40,
    MarginTop: 20,
    MarginHorizontal: 10,
    MarginHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});
