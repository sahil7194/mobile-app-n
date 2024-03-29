import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { RenderCategory } from '../../../components/authenticated/RenderCategory';
import { get } from '../../../services/ApiServices';
import { Search } from '../../../components/authenticated/Search';
import { Button, Layout, Text } from '@ui-kitten/components';
import { ButtonGroup , Icon } from '@rneui/themed';

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

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>

      <View className="border border-red-500">
        <Search />
      </View>
      <View className="border border-red-500">
        <Text>
          Adds section
        </Text>
        <ButtonGroup
         buttonStyle={{ padding: 10 }}
         selectedButtonStyle={{ backgroundColor: '#e2e2e2' }}
         buttons={[
           <Icon name="format-align-left" />,
           <Icon name="format-align-center" />,
           <Icon name="format-align-right" />,
         ]}
         selectedIndex={selectedIndex}
         onPress={setSelectedIndex}
       />
        <Layout
          level='1'
        >

          <Button onPress={() => setCounter(counter + 1)}>
            BUTTON
          </Button>

          <Text >
            {`Pressed ${counter} times`}
          </Text>

        </Layout>

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
