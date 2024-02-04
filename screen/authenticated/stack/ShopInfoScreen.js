import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar ,Button } from 'react-native'

export const ShopInfoScreen = ({ route ,navigation }) => {
  const { shopId} = route.params;
  
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      ShopInfoScreen
    </Text>
    <Text>ShopId : {shopId}</Text>
    <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  </SafeAreaView>
  )
}
