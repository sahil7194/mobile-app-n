import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'

export const ResultScreen = ({route , navigation }) => {

  const { categoryId, categoryName} = route.params;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
      ResultScreen
      </Text>
      <Text>Category Id : {JSON.stringify(categoryId)} </Text>
      <Text>Category Name : {JSON.stringify(categoryName)} </Text>
      <Button
        title="Go to ShopInfo"
        onPress={() => navigation.navigate('ShopInfo', {shopId:1})}
      />
      </View>
    </SafeAreaView>
  )
}
