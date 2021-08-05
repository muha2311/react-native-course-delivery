import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens';

export default function App() {
  return (
    <View style={{flex:1,justifyContent:'center',}}>
      <HomeScreen></HomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

