import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonTouchable from './../Components/ButtonTouchable';
import { styles } from '../Styles/Styles';

function Question({navigation}) {

    const RenderForm = (res) => {
        navigation.navigate('Carga de Datos', {data: res});
    }

  return (
    <View style={miniStyle.container}>
        <Text>¿Tiene acceso a los valores de densidad?</Text>
        <View>
            <ButtonTouchable
                styleButton={styles.button}
                styleText={styles.buttonText}
                text={"Sí"}
                pressFunction={() => RenderForm("Sí")}
            />
            <ButtonTouchable
                styleButton={styles.button}
                styleText={styles.buttonText}
                text={"No"}
                pressFunction={() => RenderForm("No")}
            />
        </View>
    </View>
  )
}

export default Question

const miniStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})