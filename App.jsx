import react, {createContext, useState} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as ReduxProvider} from 'react-redux';
import CodePush from 'react-native-code-push';

import DetailsScreen from './src/screen/Details';
import HomeScreen from './src/screen/Home';
import Profile from './src/screen/Profile';
import ListData from './src/screen/ListData';
import PostData from './src/screen/PostData';
import Login from './src/screen/login';
import Auth from './src/screen/Auth';
import ReduxCounter from './src/screen/ReduxCounter';
import store from './src/screen/store';
import LoginRedux from './src/screen/LoginRedux';
import Midtrans from './src/screen/Midtrans';
import PostList from './src/watermelon/PostList';
import CreatePost from './src/watermelon/CreatePost';

// Init Context
export const RootContext = createContext();
const Provider = RootContext.Provider;

const Stack = createNativeStackNavigator();

function App() {
  // state yang akan diconvert jadi global state /context
  const [ctxToken, setCtxToken] = useState('');
  const [username, setUsername] = useState('');

  return (
    <ReduxProvider store={store}>
      <Provider value={{ctxToken, setCtxToken, username, setUsername}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ListData" component={ListData} />
            <Stack.Screen name="PostData" component={PostData} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="ReduxCounter" component={ReduxCounter} />
            <Stack.Screen name="LoginRedux" component={LoginRedux} />
            <Stack.Screen name="Midtrans" component={Midtrans} />
            <Stack.Screen name="PostList" component={PostList} />
            <Stack.Screen name="CreatePost" component={CreatePost} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ReduxProvider>
  );
}

export default CodePush(App);
