
import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ColorButton } from './components'
import defaultColors from './data/default-color.json'

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("green")
  return (
    <FlatList
      style={[styles.container, { backgroundColor}]}
      data={defaultColors}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
    
  },
});
