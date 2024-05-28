//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Auth = ({navigation}) => {
  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }
  };

  useEffect(() => {
    checkAuth();
  });
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Yogya App</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Auth;
