//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {RootContext} from '../../App';
import axios from 'axios';

// create a component
const PostData = ({navigation}) => {
  const [qty, setQty] = useState('');

  // Call Context
  const {ctxToken} = useContext(RootContext);
  const headers = {
    Authorization: `Bearer ${ctxToken}`,
  };
  const SaveAction = () => {
    axios
      .post(
        'http://172.16.40.95:8089/api/v2/gudangFashion/submitMovein',
        {
          ext_code: '0359020100000',
          qty: qty,
          doc_number: 'GBB/MI/OTR/202405/00001',
          location_id: '6',
          initial_store: 'GBB',
        },
        {headers},
      )
      .then(response => {
        console.log(response.data);
        navigation.navigate('ListData');
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Quantity"
        onChangeText={qty => {
          setQty(qty);
        }}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          marginBottom: 10,
        }}
      />
      <Button title="Save" onPress={SaveAction} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default PostData;
