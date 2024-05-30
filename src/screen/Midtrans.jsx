import React, {useState} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Webview from './MidtransWebView';
import axios from 'axios';

function App() {
  const [isOpen, setOpen] = React.useState(false);
  const [uri, setUri] = React.useState('');

  const [orderid, setOrderId] = useState('');
  const [amount, setAmount] = useState('');
  const [snapToken, setSnapToken] = useState('');

  const getTokenSnap = async () => {
    axios
      .post('http://172.17.49.117:3000/api/v2/ecommerce/midtransToken', {
        order_id: orderid,
        gross_amount: amount,
      })
      .then(response => {
        console.log(response.data);
        setSnapToken(response.data.transactionToken);
        setOpen(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SNAP on React Native Webview</Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={setUri}
        value={null}
        placeholder="Put your SNAP link (optional)"
        keyboardType="default"
      /> */}
      <TextInput
        style={styles.input}
        onChangeText={setOrderId}
        value={null}
        placeholder="Order Id"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={null}
        placeholder="Amount"
        keyboardType="default"
      />
      <TouchableOpacity style={styles.button} onPress={getTokenSnap}>
        <Text style={styles.button__text}>Bayar</Text>
      </TouchableOpacity>
      {isOpen && (
        <BottomSheet
          snapPoints={['95%']}
          enablePanDownToClose={true}
          onClose={() => setOpen(false)}>
          <Webview snaptoken={snapToken} />
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: 50,
    width: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: '#EAEAEA',
  },
  button: {
    width: 150,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#355f86',
  },
  button__text: {
    color: '#FFFFFF',
  },
});

export default gestureHandlerRootHOC(App);
