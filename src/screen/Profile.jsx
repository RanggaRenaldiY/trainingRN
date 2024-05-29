import {View, Text, Button} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Profile({navigation}) {
  const counter = useSelector(state => state.counter.value); //get Value
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ProfileScreen</Text>
      <Text style={{fontSize: 48, marginBottom: 20}}>{counter}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={{marginBottom: 10}}></View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
