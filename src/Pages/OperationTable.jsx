import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../Styles/Styles';
import ButtonTouchable from './../Components/ButtonTouchable';

function OperationTable({ navigation, route }) {
  const datos = route.params;

  const chartRedirection = (data) => {
    navigation.navigate('ChartsPage', { data: data})
  }
  
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
      <ButtonTouchable
        styleButton={styles.button}
        styleText={styles.buttonText}
        text={'Mostrar en gráfico'}
        pressFunction={() => chartRedirection(datos.data)}
      />
      <Text>asdasd</Text>
    </>
  );
}

export default OperationTable;
