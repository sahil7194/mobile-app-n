import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'

export const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
    SignupScreen
    </Text>
    <Button
        title="Go to Login "
        onPress={() => navigation.navigate('Login')}
      />

    </View>
  </SafeAreaView>
  )
}
