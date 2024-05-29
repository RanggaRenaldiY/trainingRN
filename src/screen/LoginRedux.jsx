//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from './store';

// create a component
const LoginRedux = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login({username, password}));
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text>LoginRedux</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={password => setPassword(password)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

//make this component available to the app
export default LoginRedux;
