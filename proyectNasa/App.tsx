
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home';
import React from 'react';

export default function App() {
  return (
    

    <SafeAreaView style={styles.container}>
      <Text style={styles}>Page content</Text>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
