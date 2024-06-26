import {View, Text, Button, Alert} from 'react-native';
import React, {useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootContext} from '../../App';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from './store';
import messaging from '@react-native-firebase/messaging'; //firebase

function HomeScreen({navigation}) {
  // Redux
  const username = useSelector(state => state.login.username); //get Value Username
  const password = useSelector(state => state.login.password); //get Value Username

  // Redux Logout
  const dispatch = useDispatch();

  const logoutRedux = () => {
    dispatch(logout());
    // redirect
    // navigation.navigate('Home');
  };

  // Call Context
  const {setCtxToken} = useContext(RootContext);

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem('token'); //untuk remove item token di storage
      setCtxToken('');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  //Call Firebase
  const getTokenFirebase = async () => {
    const token = await messaging().getToken();
    console.log('teks', token);
  };

  const inAppMsg = () => {
    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  };

  useEffect(() => {
    getTokenFirebase();
    inAppMsg();
  }, []);

  console.log('test');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <Text>Home Screen</Text>
      <Text>---Redux--- </Text>
      <Text>Username: {username}</Text>
      <Text>Password: {password}</Text>
      <Text>Home Screen</Text>
      <Button title="Logout Redux" onPress={logoutRedux} />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to List Data"
        onPress={() => navigation.navigate('ListData')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to List Login"
        onPress={() => navigation.navigate('Login')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button title="Go to List Logout" onPress={Logout} />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to List Redux Counter"
        onPress={() => navigation.navigate('ReduxCounter')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to Login React Redux"
        onPress={() => navigation.navigate('LoginRedux')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to Midtrans"
        onPress={() => navigation.navigate('Midtrans')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to Create Post WaterMelonDB"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to List Post WaterMelonDB"
        onPress={() => navigation.navigate('PostList')}
      />
    </View>
  );
}
export default HomeScreen;
