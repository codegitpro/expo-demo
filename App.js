
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

function ColorButton ({ backgroundColor, onPress }) {
 return (
  <TouchableHighlight 
    style={styles.button}
    onPress={() => onPress(backgroundColor)}
    underlayColor="orange"
  >
    <View style={styles.row}>
      <View style={[styles.sample, { backgroundColor }]} ></View>
      <Text style={styles.buttonText}>{backgroundColor}</Text>
    </View>
  </TouchableHighlight>
 )
}
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("green")
  return (
    <View style={[styles.container, { backgroundColor}]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="black" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/>
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
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center"
  }
});
