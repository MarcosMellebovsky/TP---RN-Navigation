import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact', { name, phone })}
      />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
});
