import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default function App() {

  const filesTypes = ["Datos de los pozos", "Puntos"]

  return (
    <View style={styles.container}>
      <SelectDropdown
        buttonStyle={selectStyle.buttonSelect}
        dropdownStyle={selectStyle.dropdownSelect}
        defaultButtonText='Seleccione una opción'
        statusBarTranslucent={true}
        dropdownIconPosition='right'
        data={filesTypes}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const selectStyle = StyleSheet.create({
  buttonSelect: {
    borderRadius: 10,
    borderColor: "#000000",
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: "#efd510"
  },
  dropdownSelect: {
    borderRadius: 10,
    borderColor: "#000000",
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: "#efd510"
  },
})