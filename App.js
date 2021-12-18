import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Auth from './src/pages/Auth';

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <PaperProvider>
      {auth ? <Text> Home </Text> :  <Auth />}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
