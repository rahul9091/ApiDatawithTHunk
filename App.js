import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,} from 'react-native';
import {Provider} from 'react-redux'

import {PersistGate} from 'redux-persist/integration/react'
import {persistor,store} from './src/redux/store'


import RootNavigator from './src/Navigation/RootNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator/>
    </PersistGate>
    </Provider>
  );
}


