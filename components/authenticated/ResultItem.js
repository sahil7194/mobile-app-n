import React from 'react'
import { View, Text , Image, StyleSheet , TouchableOpacity , Button} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

const styles = StyleSheet.create({
   container: {
     paddingTop: 50,
   },
   stretch: {
     resizeMode: 'stretch',
   },
 });

export const ResultItem = ({ shop }) => {

   const  navigation = useNavigation();

   const  {id , name, rating , address , image , views } = shop;

  return (
     <TouchableOpacity className="flex flex-row" >
         <View className="w-24 m-1 p-1">
         <Image 
      style={styles.stretch}
      className="w-full h-36"
       source={{
         uri: image,
       }}
     />
         </View>
         <View className="w-64 m-1 p-1 px-3 h-36">
         <Text>
            {name}
         </Text> 
         <Text>
            {rating}
         </Text>
         <Text>
            {views}
         </Text>
         <Text className="my-1 h-16 overflow-hidden ">
            {address}
         </Text>
         </View>
         <View>
            <Button
             title="Go to ShopInfo"
             onPress={() => navigation.navigate("ShopInfo", { shopId: id })}
           />
         </View>
     </TouchableOpacity>
  )
}
