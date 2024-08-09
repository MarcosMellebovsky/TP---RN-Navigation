import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PantallaConfiguracion({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Button title="Go to Info" onPress={() => navigation.navigate('Informacion')} />
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
