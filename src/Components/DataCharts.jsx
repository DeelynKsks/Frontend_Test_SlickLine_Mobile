// DataCharts.jsx
import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const DataCharts = ({ data }) => {
  // Aquí, estás desestructurando la prop 'data' que se pasa al componente DataCharts.
  // 'data' es un array de objetos, donde cada objeto representa una fila del formulario.

  // Creas una variable 'labels' que es un array de strings, donde cada string representa una parada (`P1`, `P2`, etc.).
  // Esto se utilizará para las etiquetas del eje x de los gráficos.
  const labels = data.map((item, index) => `P${index + 1}`);

  // Creas dos variables, 'presionData' y 'temperaturaData', que son arrays de números.
  // Estos arrays contienen los valores de presión y temperatura respectivamente para cada parada.
  // Estos se utilizarán para los valores del eje y de los gráficos.
  const presionData = data.map(item => parseFloat(item.presion));
  const temperaturaData = data.map(item => parseFloat(item.temperatura));

  return (
    <>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: presionData,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel=""
        yAxisSuffix=" psia"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: temperaturaData,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel=""
        yAxisSuffix=" C°"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

export default DataCharts;
