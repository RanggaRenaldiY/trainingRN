import { View, Text, Button } from 'react-native'
import React from 'react'

export default function DetailsScreen({route,navigation}) {
  const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {/* <Button title = "Go to Profile" onPress = {() => navigation.navigate('ProfileScreen')} />
        <View style={{ marginBottom: 10 }}></View>
        <Button title = "Go to Home" onPress = {() => navigation.navigate('Home')} /> */}
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
    );
  }