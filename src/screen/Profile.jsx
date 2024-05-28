import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Profile({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileScreen</Text>
      <Button title = "Go to Details" onPress = {() => navigation.navigate('Details')} />
      <View style={{ marginBottom: 10 }}></View>
      <Button title = "Go to Home" onPress = {() => navigation.navigate('Home')} />
    </View>
  )
}