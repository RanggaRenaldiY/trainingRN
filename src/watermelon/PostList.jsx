import React from 'react';
import {
  FlatList,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import withObservables from '@nozbe/with-observables';
import database from './database';
//import Post from './Post';

const enhance = withObservables([], () => ({
  posts: database.collections.get('posts').query(),
}));

const PostList = ({posts}) => {
  const [editingPost, setEditingPost] = React.useState(null);
  const [newTitle, setNewTitle] = React.useState('');
  const [newBody, setNewBody] = React.useState('');

  const updatePost = async post => {
    try {
      await database.write(async () => {
        await post.update(record => {
          record.title = newTitle;
          record.body = newBody;
        });
      });
      setEditingPost(null);
      Alert.alert('Success', 'Post updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update post');
    }
  };

  const deletePost = async post => {
    try {
      await database.write(async () => {
        await post.markAsDeleted(); // syncable
        await post.destroyPermanently(); // permanent deletion
        // await somePost.markAsDeleted() // syncable
        // await somePost.destroyPermanently() // permanent
      });
      Alert.alert('Success', 'Post deleted successfully');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to delete post');
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.postContainer}>
          {editingPost === item.id ? (
            <>
              <TextInput
                style={styles.input}
                value={newTitle}
                onChangeText={setNewTitle}
                placeholder="Edit Title"
              />
              <TextInput
                style={styles.input}
                value={newBody}
                onChangeText={setNewBody}
                placeholder="Edit Body"
              />
              <Button title="Save" onPress={() => updatePost(item)} />
              <Button title="Cancel" onPress={() => setEditingPost(null)} />
            </>
          ) : (
            <>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
              <Button
                title="Edit"
                onPress={() => {
                  setEditingPost(item.id);
                  setNewTitle(item.title);
                  setNewBody(item.body);
                }}
              />
              <Button title="Delete" onPress={() => deletePost(item)} />
            </>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default enhance(PostList);
