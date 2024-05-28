//import liraries
import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootContext} from '../../App';

// create a component
const ListData = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');

  //Ambil Data Context
  const {ctxToken} = useContext(RootContext);

  const headers = {
    Authorization: `Bearer ${ctxToken}`,
  };
  const getData = () => {
    axios
      .get(
        'http://172.16.40.95:8089/api/v2/gudangFashion/getListMoveInDetail/?doc_number=GBB/MI/OTR/202405/00001&initial_store=GBB',
        {headers},
      )
      .then(response => {
        setData(response.data.resultData);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // get AsyncStorage
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
  };

  useEffect(() => {
    getData();
    getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text>List Data</Text>
      <Text>Token dari Storage</Text>
      <Text>{token}</Text>
      <Button
        title="Go to PostData"
        onPress={() => navigation.navigate('PostData')}
      />

      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
              }}>
              <Text>
                {item.id}. {item.art_desc}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});

//make this component available to the app
export default ListData;
