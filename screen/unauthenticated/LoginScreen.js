import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar ,Button } from 'react-native'

export const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
    LoginScreen
    </Text>
    <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
      
        <Button
        title="Go to Forget Password"
        onPress={() => navigation.navigate('ForgetPassword')}
      />

    </View>
  </SafeAreaView>
  )
}
