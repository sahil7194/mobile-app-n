import React from 'react'
import { Text, View } from 'react-native'
import { CategoryItem } from './CategoryItem'

export const RenderCategory = (item) => {
  return (
    <CategoryItem category={item}></CategoryItem>
  )
}
