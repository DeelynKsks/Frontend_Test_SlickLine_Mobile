import React, { useState } from 'react';
import { Button,Text ,TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  const [rows, setRows] = useState([{ parada: 1, presion: '', temperatura: '', profundidad: '', densidad: '' }]);

  const addRow = () => {
    const newRow = { parada: rows.length + 1, presion: '', temperatura: '', profundidad: '', densidad: '' };
    setRows([...rows, newRow]);
  };

  const deleteRow = () => {
    const newRows = [...rows];
    newRows.pop();
    setRows(newRows);
  };

  const updateRow = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  return (
    <View style={styles.container}>
      {rows.map((row, index) => (
        <View key={index} style={styles.row}>
          <Text>Parada: {row.parada}</Text>
          <TextInput placeholder="Presión" onChangeText={(value) => updateRow(index, 'presion', value)} />
          <TextInput placeholder="Temperatura" onChangeText={(value) => updateRow(index, 'temperatura', value)} />
          <TextInput placeholder="Profundidad" onChangeText={(value) => updateRow(index, 'profundidad', value)} />
          <TextInput placeholder="Densidad" onChangeText={(value) => updateRow(index, 'densidad', value)} />
        </View>
      ))}
      <Button title="Agregar fila" onPress={addRow} />
      <Button title="Borrar fila" onPress={deleteRow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
