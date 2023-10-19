import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    sendButton: {
      borderStyle:'solid',
      borderWidth :1,
      borderRadius :5,
      borderColor :"#000000",
      backgroundColor :"#efd510",
      width :'50%',
      alignSelf: 'center',
      marginTop :10
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 17
    }
  });