import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        Home Screen
      </Text>

      </View>
    </SafeAreaView>
  )
}
