import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

function calculateDensity(pressure, depth) {
  if (!pressure || !depth) {
    return null;
  }

  let g = 9.81; // aceleración debido a la gravedad en m/s²
  let pressureInPascals = parseFloat(pressure) * 6894.76; // convertir la presión de psia a Pascales
  let density = pressureInPascals / (g * parseFloat(depth)); // calcular la densidad en kg/m³

  return density;
}
  
export default function ChartsData({data}) {
    const presion = data.map(item => ({ 
        value: item.presion ? item.presion : 0, 
        label: item.parada.toString(),
        depth: item.profundidad ? item.profundidad : 0,
        dataPointText: `Profundidad: ${item.profundidad}` 
    }));
    const temperatura = data.map(item => ({ 
        value: item.temperatura ? item.temperatura : 0, 
        depth: item.profundidad ? item.profundidad : 0,
        label: item.parada.toString(),
        temp: item.temperatura ? item.temperatura : 0,
        dataPointText: `Profundidad: ${item.profundidad}`
    }));

    const fluidTypes = data.map((item, index) => {
        let density;
        if (item.densidad) {
          // Si el usuario proporcionó un valor de densidad, úsalo
          density = Number(item.densidad);
        } else {
          // Si no, calcula la densidad a partir de la presión y la profundidad
          density = calculateDensity(Number(item.presion), Number(item.profundidad));
        }
      
        let fluidType = "Desconocido";
      
        if (density >= 800 && density <= 900) {
          fluidType = "Agua Salada";
        } else if (density > 900) {
          fluidType = "Petróleo";
        } else if (density < 800) {
          fluidType = "Gas";
        }
      
        return `PARADA N° ${index + 1}: ${fluidType}`;
      });

    const densidad = data.map(item => {
      let density;
      if (item.densidad) {
        // Si el usuario proporcionó un valor de densidad, úsalo
        density = parseFloat(item.densidad);
      } else {
        // Si no, calcula la densidad a partir de la presión y la profundidad
        density = calculateDensity(item.presion, item.profundidad);
      }
    
      return density;
    });

    console.log(data)

    return (
      <ScrollView>
        <Text>Gráfico del Gradiente de Presión</Text>
        <ScrollView horizontal={true}>
          <LineChart
            areaChart
            initialSpacing={20}
            data={presion}
            height={280}
            maxValue={5800}
            showVerticalLines
            backgroundColor="black"
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            spacing={54}
            color1="skyblue"
            textColor1="white"
            hideRules
            dataPointsHeight={6}
            dataPointsWidth={6}
            verticalLinesColor={"skyblue"}
            dataPointsColor1="red"
            yAxisColor="black"
            xAxisColor="black"
            yAxisTextStyle={{color: 'black'}}
            textShiftY={-2}
            textShiftX={6}
            textFontSize={11}
            pointerConfig={{
                pointerStripUptoDataPoint: true,
                pointerStripColor: 'lightgray',
                pointerStripWidth: 2,
                strokeDashArray: [2, 5],
                pointerColor: 'red',
                radius: 4,
                pointerLabelWidth: 100,
                pointerLabelHeight: 120,
                pointerLabelComponent: items => {
                  const item = items[0];
                  return (
                    <View
                      style={{
                        height: 120,
                        width: 120,
                        backgroundColor: '#282C3E',
                        borderRadius: 4,
                        justifyContent:'center',
                        paddingLeft:16,
                        paddingRight:16
                      }}>
                      <Text style={{color: 'lightgray',fontSize:12}}>Presión</Text>
                      <Text style={{color: 'white', fontWeight:'bold'}}>{item.presion}</Text>
                      <Text style={{color: 'lightgray',fontSize:12,marginTop:12}}>Profundidad</Text>
                      <Text style={{color: 'white', fontWeight:'bold'}}>{item.profundidad}</Text>
                    </View>
                  );
                },
              }}
          />
        </ScrollView>
        <Text>Gráfico del Gradiente de Temperatura</Text>
        <ScrollView horizontal={true}>
          <LineChart
            areaChart
            initialSpacing={10}
            data={temperatura}
            height={330}
            maxValue={65}
            yAxisOffset={110}
            spacing={54}
            hideRules
            showVerticalLines
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            backgroundColor="black"
            color1="skyblue"
            textColor1="white"
            dataPointsHeight={6}
            dataPointsColor1="red"
            textShiftY={-2}
            textShiftX={6}
            pointerConfig={{
                pointerStripUptoDataPoint: true,
                pointerStripColor: 'lightgray',
                pointerStripWidth: 2,
                strokeDashArray: [2, 5],
                pointerColor: 'red',
                radius: 4,
                pointerLabelWidth: 100,
                pointerLabelHeight: 120,
                pointerLabelComponent: (items) => {
                  const item = items[0];
                  return (
                    <View
                      style={{
                        height: 130,
                        width: 150,
                        backgroundColor: '#282C3E',
                        borderRadius: 4,
                        justifyContent:'center',
                        paddingLeft:16,
                      }}>
                      <Text style={{color: 'lightgray',fontSize:12}}>Temperatura</Text>
                      <Text style={{color: 'white', fontWeight:'bold'}}>{item.temperatura}</Text>
                      <Text style={{color: 'lightgray',fontSize:12,marginTop:12}}>Profundidad</Text>
                      <Text style={{color: 'white', fontWeight:'bold'}}>{item.profundidad}</Text>
                    </View>
                  );
                },
              }}
          />
        </ScrollView>
        <Text>Tipos de Fluido por Parada:</Text>
        {fluidTypes.map((fluidType, index) => (
            <Text key={index}>{fluidType}</Text>
        ))}
      </ScrollView>
    );
  }
