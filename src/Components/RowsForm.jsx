import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from '../Styles/Styles'

function RowsForm({conditional, data, updateRow}) {

  
  const densityInput = conditional === 'Sí' ? (
    <TextInput 
      placeholder="Densidad(kg/m³)" 
      onChangeText={(value) => updateRow(data.parada - 1, 'densidad', value)} 
      value={data.densidad}
    />
  ) : <Text></Text>;

  return (
    <View style={styles.row}>
      <Text style={{alignSelf: 'center'}}>Parada: {data.parada}</Text>
      <TextInput
        placeholder="Presión(psia)" 
        onChangeText={(value) => updateRow(data.parada - 1, 'presion', value)} 
        value={data.presion}
      />
      <TextInput 
        placeholder="Temperatura(C°)" 
        onChangeText={(value) => updateRow(data.parada - 1, 'temperatura', value)} 
        value={data.temperatura}
      />
      <TextInput 
        placeholder="Profundidad(m)" 
        onChangeText={(value) => updateRow(data.parada - 1, 'profundidad', value)} 
        value={data.profundidad}
      />
      {densityInput}
    </View>
  )
}

export default RowsForm
