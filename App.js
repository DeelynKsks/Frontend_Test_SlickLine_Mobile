import React, { useState, useRef } from 'react';
import { Button, Text ,TextInput, View, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [rows, setRows] = useState([{ parada: 1, presion: '', temperatura: '', profundidad: '', densidad: '' }]);
  const scrollViewRef = useRef();

  const addRow = () => {
    const newRow = { parada: rows.length + 1, presion: '', temperatura: '', profundidad: '', densidad: '' };
    setRows([...rows, newRow]);
    scrollViewRef.current.scrollToEnd({ animated: true });
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

  const sendData = () => {
    console.log(JSON.stringify(rows));
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <View style={{marginBottom: 30}}></View>
      {rows.map((row, index) => (
        <View key={index} style={styles.row}>
          <Text>Parada: {row.parada}</Text>
          <TextInput placeholder="Presión" onChangeText={(value) => updateRow(index, 'presion', value)} />
          <TextInput placeholder="Temperatura" onChangeText={(value) => updateRow(index, 'temperatura', value)} />
          <TextInput placeholder="Profundidad" onChangeText={(value) => updateRow(index, 'profundidad', value)} />
          <TextInput placeholder="Densidad" onChangeText={(value) => updateRow(index, 'densidad', value)} />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={addRow}>
            <Text style={{textAlign: 'center', fontSize: 17}}>Agregar fila</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={deleteRow}>
            <Text style={{textAlign: 'center', fontSize: 17}}>Borrar fila</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={sendData}>
        <Text style={{textAlign: 'center', fontSize: 17}}>Enviar</Text>
      </TouchableOpacity>
      <View style={{marginBottom: 30}}></View>
    </ScrollView>
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
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20, // o cualquier valor que desees para el espacio entre los botones y el siguiente elemento
    justifyContent: "space-between",
  },
  buttonWrapper: {
    width: '45%', // ajusta este valor para cambiar el espacio entre los botones
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000000",
    backgroundColor: "#efd510",
    width: '100%',
    justifyContent: "center"
  },
  sendButton:{
    borderStyle:'solid',
    borderWidth :1,
    borderRadius :5,
    borderColor :"#000000",
    backgroundColor :"#efd510",
    width :'50%',
    alignSelf: 'center',
    marginTop :10
  }
});
