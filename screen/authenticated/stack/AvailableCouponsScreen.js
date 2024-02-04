import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const AvailableCouponsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
    This is the list of available coupons!
    </Text>

    </View>
  </SafeAreaView>
  )
}
