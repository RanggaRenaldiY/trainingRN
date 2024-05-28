//import liraries
import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootContext} from '../../App';

// create a component
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // Panggil Context
  const {setCtxToken} = useContext(RootContext);

  const LoginAction = () => {
    axios
      .post('http://172.16.40.95:8089/api/v2/auth/login', {
        username: username,
        password: password,
      })
      .then(response => {
        // setToken(response.data?.accessToken);
        setCtxToken(response.data.accessToken);
        navigation.navigate('ListData');
        AsyncStorage.setItem('token', response.data.accessToken);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        onChangeText={username => {
          setUsername(username);
        }}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={password => {
          setPassword(password);
        }}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          marginBottom: 20,
        }}
      />
      <Button title="Login" onPress={LoginAction} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});

//make this component available to the app
export default Login;
