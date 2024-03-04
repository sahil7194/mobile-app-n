import React from 'react'
import { View, Text , Image, StyleSheet , TouchableOpacity} from 'react-native'
import { ResultStub } from '../../stub/result.stub';

const styles = StyleSheet.create({
   container: {
     paddingTop: 50,
   },
   stretch: {
     resizeMode: 'stretch',
   },
 });

export const ResultItem = ({ route, navigation }) => {

   // const {shop } = route.params;c
   // console.log(route.params);
    const  {id , name, rating , address , img_url , views, open_status, contact_number, opne_time, close_time} = ResultStub[0];

  return (
     <TouchableOpacity className="flex flex-row" >
         <View className="w-24 m-1 p-1">
         <Image 
      style={styles.stretch}
      className="w-full h-36"
       source={{
         uri: img_url,
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
     </TouchableOpacity>
  )
}
