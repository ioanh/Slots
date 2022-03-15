import ReelSet from './components/ReelSet';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Dimensions } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.playContainer} > 
        <ReelSet></ReelSet>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Spin' onPress={() => {}}/>
      </View> 
    </View>
  );
}

export const Constants = {
  MAX_WIDTH: Dimensions.get('window').width,
  MAX_HEIGHT: Dimensions.get('window').height,
  REELS: 5,
  SYMBOLS: 3,
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
