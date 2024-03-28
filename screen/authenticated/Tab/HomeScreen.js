import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { RenderCategory , CategoriesList } from '../../../components/authenticated/RenderCategory';
import { get } from '../../../services/ApiServices';
import { Search } from '../../../components/authenticated/Search';
import { Text } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const [categoryData, setCategoryData] = useState([]);

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
      <View className="">
        <Search />
      </View>
      <View className="">
        <Text>
          Adds section
        </Text>
    
      </View>

      <View className="m-1 p-1">
        <FlatList
          data={categoryData}
          renderItem={RenderCategory}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}
