import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormSendData from './src/Components/FormSendData';
import ChartsPage from './src/Pages/ChartsPage';
import Question from './src/Pages/Question';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pregunta">
        <Stack.Screen name="Pregunta" component={Question} />
        <Stack.Screen name="Carga de Datos" component={FormSendData} />
        <Stack.Screen name="ChartsPage" component={ChartsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}