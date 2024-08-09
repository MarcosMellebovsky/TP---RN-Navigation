import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen({ route }) {
  const { name, phone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Screen</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Phone: {phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
