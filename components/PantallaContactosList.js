import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';

export default function Contactos() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContactos(contacts);
    });
  }, []);

  return (
    <FlatList
      data={contactos}
      keyExtractor={item => item.recordID}
      renderItem={({ item }) => (
        <View>
          <Text>{item.givenName} {item.familyName}</Text>
          <Text>{item.phoneNumbers[0]?.number}</Text>
        </View>
      )}
    />
  );
}
