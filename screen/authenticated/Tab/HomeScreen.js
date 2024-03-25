import React, { useState } from 'react'
import { Text, View ,SafeAreaView ,StatusBar ,Button, FlatList  } from 'react-native'
import { RenderCategory } from '../../../components/authenticated/RenderCategory';
import { get } from '../../../services/ApiServices';
import { Search } from '../../../components/authenticated/Search';

export const HomeScreen = ({ navigation }) => {

  const [categoryData , setCategoryData] = useState([]);

  const getCategory = () => {
      get('categories').then((response) => {
        setCategoryData(response.data);
      }).catch((err) => {
        console.log(err);
      });
  }
  
  categoryData.length === 0 ? getCategory() : null;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>

      <View className="border border-red-500">
        <Search/>
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
