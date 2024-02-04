import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button } from 'react-native'

export const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        Account Screen
      </Text>
      <Button
        title="Go to EditPassword"
        onPress={() => navigation.navigate('EditPassword')}
      />
      <Button
        title="Go to EditProfile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      </View>
    </SafeAreaView>
  )
}
