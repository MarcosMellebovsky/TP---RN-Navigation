import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export default function Contactos() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const obtenerContactos = async () => {
      // Solicitar permiso para acceder a los contactos
      const { status } = await Contacts.requestPermissionsAsync();
      
      if (status === 'granted') {
        // Obtener todos los contactos
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContactos(data);
        } else {
          Alert.alert('No se encontraron contactos');
        }
      } else {
        Alert.alert('Permiso denegado', 'No se puede acceder a los contactos');
      }
    };

    obtenerContactos();
  }, []);

  return (
    <FlatList
      data={contactos}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text style={styles.welcome}>Tus contactos</Text>} // Texto de bienvenida
      renderItem={({ item }) => (
        <View style={styles.contacto}>
          <Text>{item.firstName} {item.lastName}</Text>
          {item.phoneNumbers && item.phoneNumbers.length > 0 ? (
            <Text>{item.phoneNumbers[0].number}</Text>
          ) : (
            <Text>Sin número de teléfono</Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contacto: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
