import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const ScanScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      Scan Screen
    </Text>

    </View>
  </SafeAreaView>
  )
}
