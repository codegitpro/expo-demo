
import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ColorButton, ColorForm } from './components'
// import defaultColors from './data/default-color.json'
import { useColor} from './hooks'

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("green")
  const { colors, addColor}= useColor()
  return (
    <>
      <ColorForm onNewColor={addColor}/>
      <FlatList
        style={[styles.container, { backgroundColor}]}
        data={colors}
        renderItem={({item}) => {
          console.log("item", item)
          return (
            <ColorButton 
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          )
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  },
  wrapper: {
    padding: 20
  }
});
