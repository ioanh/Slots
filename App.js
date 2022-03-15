import { StatusBar } from 'expo-status-bar';
import React from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Button, View } from 'react-native';
import {Constants} from './Constants.js';

export default function App() {
  return (
    <View style={styles.container}>
      <div style={playContainer}>asdas</div>
      <div style={buttonContainer}>asfas</div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: Constants.MAX_WIDTH,
    height: 60,
    color: blue,
  },
  playContainer:{
    width: Constants.MAX_WIDTH,
    height: 60,
    color: red,
  },

});
