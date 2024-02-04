import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'

export const ResultScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
      ResultScreen
      </Text>
      <Button
        title="Go to ShopInfo"
        onPress={() => navigation.navigate('ShopInfo')}
      />
      </View>
    </SafeAreaView>
  )
}
