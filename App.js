import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.playContainer}>Open up App.js to start working on your app!</Text>
      <Text style={styles.buttonContainer}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    height: 60,
    width: Dimensions.get('window').width,
  },
  playContainer: {
    backgroundColor: 'red',
    height: Dimensions.get('window').height - 60,
    width: Dimensions.get('window').width,
  }
});

const Constants = {
  MAX_WIDTH: Dimensions.get('window').width,
  MAX_HEIGHT: Dimensions.get('window').height,
}
