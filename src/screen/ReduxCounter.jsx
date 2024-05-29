//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from './store';

// create a component
const ReduxCounter = () => {
  const counter = useSelector(state => state.counter.value); // get Value
  const dispatch = useDispatch(); //set value

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
});

//make this component available to the app
export default ReduxCounter;
