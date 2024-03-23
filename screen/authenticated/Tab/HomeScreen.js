import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar ,Button, FlatList  } from 'react-native'
import { retrieveData } from '../../../services/LocalStorageService';
import { RenderCategory } from '../../../components/authenticated/RenderCategory';

export const HomeScreen = ({ navigation }) => {

  const categoryData = [
    {
        "id": 1,
        "name": "Kelley Schmeler",
        "image": "https://source.unsplash.com/random/200x200?sig=12"
    },
    {
        "id": 2,
        "name": "Mrs. Arlene Wolf",
        "image": "https://source.unsplash.com/random/200x200?sig=2"
    },
    {
        "id": 3,
        "name": "Mr. Zackery Kautzer",
        "image": "https://source.unsplash.com/random/200x200?sig=4"
    },
    {
        "id": 4,
        "name": "Katlyn Trantow",
        "image": "https://source.unsplash.com/random/200x200?sig=11"
    },
    {
        "id": 5,
        "name": "Baby Stark",
        "image": "https://source.unsplash.com/random/200x200?sig=6"
    },
    {
        "id": 6,
        "name": "Bethel Doyle",
        "image": "https://source.unsplash.com/random/200x200?sig=17"
    },
    {
        "id": 7,
        "name": "Laron Blick",
        "image": "https://source.unsplash.com/random/200x200?sig=3"
    },
    {
        "id": 8,
        "name": "Jaime Dooley",
        "image": "https://source.unsplash.com/random/200x200?sig=12"
    },
    {
        "id": 9,
        "name": "Angus Wyman",
        "image": "https://source.unsplash.com/random/200x200?sig=2"
    },
    {
        "id": 10,
        "name": "Wanda Rodriguez",
        "image": "https://source.unsplash.com/random/200x200?sig=12"
    }
];
  

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      {/* <View>
      <Text className="border border-red-500">
        Home Screen
      </Text>

     

      </View> */}
      <View className="border border-red-500">
        <Text>
          search compoent 
        </Text>
      </View>
      <View className="border border-red-500">
        <Text>
          Adds section
        </Text>
      </View>

      <View className="border border-red-500">
        <Text>
          Category section
        </Text>
        <FlatList
          data={categoryData}
          renderItem={RenderCategory}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}
