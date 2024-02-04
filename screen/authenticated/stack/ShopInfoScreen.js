import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar ,Button } from 'react-native'

export const ShopInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      ShopInfoScreen
    </Text>
    <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  </SafeAreaView>
  )
}
