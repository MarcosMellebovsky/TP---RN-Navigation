import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Info Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
