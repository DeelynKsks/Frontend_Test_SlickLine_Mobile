// import React from 'react';
// import { View, Text, Dimensions } from 'react-native';
// import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';

// export default function ChartsData({data}) {
//     // Crear arrays para profundidad, presión y temperatura
//     const presion = data.map(item => parseFloat(item.presion));
//     const temperatura = data.map(item => parseFloat(item.temperatura));
//     const profundidad = data.map(item => parseFloat(item.profundidad)); 

//     const fluidTypes = data.map(item => {
//       const density = item.densidad ? parseFloat(item.densidad) : calculateDensity(item.presion, item.profundidad);
//       let fluidType = "Desconocido";
//       if (density >= 800 && density <= 900) {
//         fluidType = "Agua Salada";
//       } else if (density > 900) {
//         fluidType = "Petróleo";
//       } else if (density < 800) {
//         fluidType = "Gas";
//       }
//       return fluidType;
//     });

//     return (
//       <View>
//         <Text>Gráfico del Gradiente de Presión</Text>
//         <View style={{ height: 200, flexDirection: 'row' }}>
//           <YAxis
//             data={presion}
//             contentInset={{ top: 20, bottom: 20 }}
//             svg={{
//               fill: 'grey',
//               fontSize: 10,
//             }}
//             numberOfTicks={10}
//             formatLabel={(value) => `${value}`}
//           />
//           <LineChart
//             style={{ flex: 1, marginLeft: 16 }}
//             data={presion}
//             svg={{ stroke: 'rgb(134, 65, 244)' }}
//             contentInset={{ top: 20, bottom: 20 }}
//             curve={shape.curveNatural}
//           >
//             <Grid />
//           </LineChart>
//         </View>
//         <XAxis
//           style={{ marginHorizontal: -10 }}
//           data={profundidad}
//           formatLabel={(value, index) => `${fluidTypes[index]}`}
//           contentInset={{ left: 10, right: 10 }}
//           svg={{ fontSize: 10, fill: 'black' }}
//         />
//         {/* Repite para el gráfico de temperatura */}
//       </View>
//     );
// }
