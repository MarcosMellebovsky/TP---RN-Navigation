import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

export default function Clima() {
  const [location, setLocation] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const obtenerClima = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=YOUR_API_KEY&units=metric`
        );
        setTemperature(response.data.main.temp);
      }
    };
    obtenerClima();
  }, []);

  return (
    <View>
      <Text>Fecha y hora: {date.toLocaleString()}</Text>
      <Text>Ubicación: {location?.coords.latitude}, {location?.coords.longitude}</Text>
      <Text>Temperatura: {temperature ? `${temperature}°C` : 'Cargando...'}</Text>
    </View>
  );
}
