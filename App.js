import React from 'react'
import { ColorList, ColorDetails} from './components'
import { NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
          name="Home" 
          option={{ title: "Color List"}} 
          component={ColorList}
        />
        <Screen name="Details" component={ColorDetails}/>
      </Navigator>
    </NavigationContainer>
  )
}