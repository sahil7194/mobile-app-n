import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const CouponInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
       CouponInfoScreen
      </Text>

      </View>
    </SafeAreaView>
  )
}
