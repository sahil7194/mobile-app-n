import React from 'react'
import { Text, View , Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export const CategoryItem = ({category}) => {

  const  navigation = useNavigation();

  const { id , name , image } = category.item;

  return (
    <View>
      <Text>
        {id}
      </Text>
      <Text>
        {name}
      </Text>
      <Text>
        {image}
      </Text>
      <Button
        title="Go to Result"
        onPress={() => navigation.navigate('Result',{
          categoryId:id,
          categoryName:name
        })}
      />
    </View>
  )
}
