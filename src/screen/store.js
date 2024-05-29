import {configureStore, createSlice} from '@reduxjs/toolkit';

//Slice Counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;

// Slice Login
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: null,
    password: null,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: state => {
      state.username = null;
      state.password = null;
    },
  },
});

export const {login, logout} = loginSlice.actions;
// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer,
  },
});
export default store;
