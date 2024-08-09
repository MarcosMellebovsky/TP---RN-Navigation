import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function PantallaPerfil({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValid = name !== '' && phone !== '';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        
        <Button
          title="Ir a Contacto"
          onPress={() => navigation.navigate('Contacto', { name, phone })}
          disabled={!isFormValid}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
});
