import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import PantallaInicio from './components/PantallaInicio';
import PantallaDetalles from './components/PantallaDetalles';
import PantallaPerfil from './components/PantallaPerfil';
import PantallaConfiguracion from './components/PantallaConfiguracion';
import PantallaContacto from './components/PantallaContacto';
import PantallaInformacion from './components/PantallaInformacion';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InicioStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InicioPrincipal" component={PantallaInicio} />
      <Stack.Screen name="Detalles" component={PantallaDetalles} />
    </Stack.Navigator>
  );
}

function PerfilStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PerfilPrincipal" component={PantallaPerfil} />
      <Stack.Screen name="Contacto" component={PantallaContacto} />
    </Stack.Navigator>
  );
}

function ConfiguracionStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConfiguracionPrincipal" component={PantallaConfiguracion} />
      <Stack.Screen name="Informacion" component={PantallaInformacion} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let nombreIcono;

            if (route.name === 'Inicio') {
              nombreIcono = 'home';
            } else if (route.name === 'Perfil') {
              nombreIcono = 'person';
            } else if (route.name === 'Configuracion') {
              nombreIcono = 'settings';
            }

            return <Ionicons name={nombreIcono} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Inicio" component={InicioStack} />
        <Tab.Screen name="Configuracion" component={ConfiguracionStack} />
        <Tab.Screen name="Perfil" component={PerfilStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
