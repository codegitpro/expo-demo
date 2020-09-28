import React,  { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { generate } from 'shortid'

export const useColor = () => {
  const [colors, setColors] = useState([])

  const loadColors = async() => {
    const colorData = await AsyncStorage.getItem("@ColorListStore.Colors")
    if (colorData) {
      const colors = JSON.parse(colorData)
      setColors(colors)
    }
  }

  useEffect(() => {
    if (colors.length) return
    loadColors();
  })

  useEffect(() => {
    AsyncStorage.setItem("@ColorListStore.Colors", JSON.stringify(colors))
  })

  const addColor = color => {
    const newColor = { id: generate(), color }
    setColors([ newColor, ...colors])
  }
  return { colors, addColor}
}