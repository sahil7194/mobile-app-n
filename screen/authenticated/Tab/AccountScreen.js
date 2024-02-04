import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const AccountScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        Account Screen
      </Text>

      </View>
    </SafeAreaView>
  )
}
