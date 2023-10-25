import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonTouchable from './../Components/ButtonTouchable';
import { styleList, styles } from '../Styles/Styles';

function Question({navigation}) {

    const formRedirection = (res) => {
        navigation.navigate('Carga de Datos', {data: res});
    }

  return (
    <View style={miniStyle.container}>
        <Text>¿Tiene acceso a los valores de densidad?</Text>
        <View>
            <ButtonTouchable
                styleButton={styleList.listEntry}
                styleText={styles.buttonText}
                text={"Sí"}
                pressFunction={() => formRedirection("Sí")}
            />
            <ButtonTouchable
                styleButton={styleList.listEntry}
                styleText={styles.buttonText}
                text={"No"}
                pressFunction={() => formRedirection("No")}
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