import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, FlatList, ScrollView} from 'react-native'
import { RenderCategory } from '../../../components/authenticated/RenderCategory';
import { get } from '../../../services/ApiServices';
import { Search } from '../../../components/authenticated/Search';
import { Text } from '@ui-kitten/components';
import { Carousel } from 'react-native-ui-lib';

export const HomeScreen = ({ navigation }) => {

  const [counter, setCounter] = useState(0);

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
