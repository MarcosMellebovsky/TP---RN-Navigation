import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaContacto({ route }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Screen</Text>
      <Text style={styles.text}>Name: {nombre}</Text>
      <Text style={styles.text}>Phone: {telefono}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'20'
  },
  text: {
    fontSize: 20,
  },
});
