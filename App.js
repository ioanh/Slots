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

export const Constants = {
  MAX_WIDTH: Dimensions.get('window').width,
  MAX_HEIGHT: Dimensions.get('window').height,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    height: 60,
    width: Constants.MAX_WIDTH,
  },
  playContainer: {
    backgroundColor: 'red',
    height: Constants.MAX_HEIGHT - 60,
    width: Constants.MAX_WIDTH,
  }
});


