import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const ColorButton  = ({ backgroundColor, onPress }) => {
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

 
const styles = StyleSheet.create({
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

export default ColorButton