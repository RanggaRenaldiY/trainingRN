//createpost
import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Alert} from 'react-native';
import database from './database';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPost = async () => {
    try {
      await database.write(async () => {
        await database.collections.get('posts').create(post => {
          post.title = title;
          post.body = body;
        });
      });
      setTitle('');
      setBody('');
      Alert.alert('Success', 'Post created successfully');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to create post');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
      />
      <Button title="Create Post" onPress={createPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default CreatePost;
