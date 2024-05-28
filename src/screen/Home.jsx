import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootContext} from '../../App';

function HomeScreen({navigation}) {
  // Call Context
  const {setCtxToken} = useContext(RootContext);

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setCtxToken('');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
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
    </View>
  );
}
export default HomeScreen;
