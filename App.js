import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormSendData from './src/Components/FormSendData';
import ChartsPage from './src/Pages/ChartsPage';
import Question from './src/Pages/Question';
import JobsList from './src/Pages/JobsList';
import OperationTable from './src/Pages/OperationTable';
import Principal from './src/Pages/Principal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Pregunta" component={Question} />
        <Stack.Screen name="Carga de Datos" component={FormSendData} />
        <Stack.Screen name="ChartsPage" component={ChartsPage} />
        <Stack.Screen name="JobsList" component={JobsList} />
        <Stack.Screen name="Table" component={OperationTable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}