import React from 'react'
import { Text, View , Button, Image ,TouchableOpacity} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export const CategoryItem = ({category}) => {

  const  navigation = useNavigation();

  const { id , name , image } = category.item;

  return (
    <TouchableOpacity
    className="border-b-2 mb-2"
     onPress={() => navigation.navigate('Result',{
      categoryId:id,
      categoryName:name
    })}>
    <View>
       <Image
      className="w-full h-36"
       source={{
         uri: image,
       }}
     />
      <Text className="text-base p-1">
        {name}
      </Text>
    </View>
    </TouchableOpacity>
  )
}
