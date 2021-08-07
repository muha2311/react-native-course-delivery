import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { HomeScreen } from './src/screens';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <>
      <RootNavigator></RootNavigator>
      </>
  );
}

