import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const ResultScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
      ResultScreen
      </Text>

      </View>
    </SafeAreaView>
  )
}
