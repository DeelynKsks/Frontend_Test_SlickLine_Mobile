import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormSendData from './src/Components/FormSendData';
import ChartsPage from './src/Pages/ChartsPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carga de Datos">
        <Stack.Screen name="Carga de datos" component={FormSendData} />
        <Stack.Screen name="ChartsPage" component={ChartsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}