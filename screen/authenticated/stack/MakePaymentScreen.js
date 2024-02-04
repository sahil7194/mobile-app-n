import React from 'react'
import { Text, View } from 'react-native'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const MakePaymentScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
      MakePaymentScreen
      </Text>

      </View>
    </SafeAreaView>
  )
}
