import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button } from 'react-native'

export const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
    ForgetPasswordScreen
    </Text>
    <Button
        title="Go to ResetPassword"
        onPress={() => navigation.navigate('ResetPassword')}
      />

    </View>
  </SafeAreaView>
  )
}
