import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../Styles/Styles';

function OperationTable({ route }) {
  const datos = route.params;

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        data={datos.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text>Parada: {item.parada}</Text>
            <Text>{item.presion}</Text>
            <Text>{item.temperatura}</Text>
            <Text>{item.profundidad}</Text>
            <Text>{item.densidad}</Text>
          </View>
        )}
      />
      <Text>asdasd</Text>
    </>
  );
}

export default OperationTable;
