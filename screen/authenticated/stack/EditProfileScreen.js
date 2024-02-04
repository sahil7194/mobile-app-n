import React from 'react'
import { Text, View } from 'react-native'
import { Text, View ,SafeAreaView ,StatusBar } from 'react-native'

export const EditProfileScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      EditProfileScreen
    </Text>

    </View>
  </SafeAreaView>
  )
}
