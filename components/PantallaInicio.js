import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PantallaInicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Inicio</Text>
      <Button title="Ir a detalles" onPress={() => navigation.navigate('Detalles')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
