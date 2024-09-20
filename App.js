import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import PantallaInicio from './components/PantallaInicio';
import PantallaDetalles from './components/PantallaDetalles';
import PantallaPerfil from './components/PantallaPerfil';
import PantallaContacto from './components/PantallaContacto';
import PantallaInformacion from './components/PantallaInformacion';
import PantallaAboutQR from './components/PantallaAboutQR';
import PantallaClima from './components/PantallaClima';
import PantallaContactosList from './components/PantallaContactosList';
import PantallaEmergencia from './components/PantallaEmergencia';
import EscanearQR from './components/PantallaEscanearQR';
import PantallaLlamadoEmergencia from './components/PantallaLlamadoEmergencia';

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
      <Stack.Screen name="ContactoPrincipal" component={PantallaContactosList} />
      
    </Stack.Navigator>
  );
}
function EmergenciaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Emergencia" component={PantallaEmergencia} />
      <Stack.Screen name="PantallaLlamadoEmergencia" component={PantallaLlamadoEmergencia} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home';
            }  
            else if (route.name === 'Emergencia') {
              iconName = 'call';  
            }
            else if (route.name === 'Contactos') {
              iconName = 'people';
            }
            
            else if (route.name === 'Perfil') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Inicio" component={InicioStack} />
        <Tab.Screen name="Emergencia" component={EmergenciaStack} />

        <Tab.Screen name="Contactos" component={ConfiguracionStack} />
        <Tab.Screen name="Perfil" component={PerfilStack} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
