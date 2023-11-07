import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

function calculateDensity(pressure, depth) {
  let g = 9.81;
  let pressureInPascals = pressure * 6894.76;
  let density = pressureInPascals / (g * depth);
  return density;
}

export default function FileUploader() {
  const [data, setData] = useState(null);

  const processFile = async (fileContent) => {
    console.log(fileContent)
    const lines = fileContent.split('\n');

    let headers = lines[0].split(/\s+/);
    let pressureIndex = headers.indexOf('Pressure');
    let temperatureIndex = headers.indexOf('Temperature');
    let stopIndex = headers.length - 1;

    let formattedData = lines.slice(1).map(line => {
      let parts = line.split(/\s+/);
      if (parts.length < headers.length) {
        return null;
      }
      let pressure = parseFloat(parts[pressureIndex]);
      let temperature = parseFloat(parts[temperatureIndex]);
      let stop = 'P ' + parts.slice(stopIndex).join(' ').replace('PARADA N� ', '');
      let density = calculateDensity(pressure, temperature);
      return {
        Stop: stop,
        Pressure: pressure,
        Temperature: temperature,
        Density: density
      };
    }).filter(item => item !== null && !isNaN(item.Pressure));

    setData(formattedData);
    console.log(formattedData)
  }

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      console.log(result)
      if (!result.canceled) {
        const fileContent = await FileSystem.readAsStringAsync(result.assets[0].uri, {
          encoding: FileSystem.EncodingType.UTF8,
        });

        processFile(fileContent);
      }
    } catch (error) {
      console.error('Error reading the file: ', error);
    }
  };

  return (
    <ScrollView>
      <Button title="Cargar archivo" onPress={pickDocument} />
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </ScrollView>
  );
}
