import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ChartsData({data}) {
    // Crear arrays para profundidad, presión y temperatura
    const presion = data.map(item => item.presion);
    const temperatura = data.map(item => item.temperatura);
    const profundidad = data.map(item => item.profundidad.toString()); // Convertir a cadenas

    const chartDataPresion = {
      labels: profundidad, // Profundidad en el eje X
      datasets: [
        {
          data: presion, // Presión en el eje Y
        },
      ],
    };

    const chartDataTemperatura = {
      labels: profundidad, // Profundidad en el eje X
      datasets: [
        {
          data: temperatura, // Temperatura en el eje Y
        },
      ],
    };

    return (
      <View>
        <Text>Gráfico del Gradiente de Presión</Text>
        <LineChart
          data={chartDataPresion}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
          }}
          bezier
        />
        <Text>Gráfico del Gradiente de Temperatura</Text>
        <LineChart
          data={chartDataTemperatura}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
          }}
          bezier
        />
      </View>
    );
}
