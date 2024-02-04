import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const HistoryScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      history Screen
    </Text>

    </View>
  </SafeAreaView>
  )
}
