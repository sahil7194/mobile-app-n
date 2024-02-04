import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'

export const EditPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      EditPasswordScreen
    </Text>
    <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  </SafeAreaView>
  )
}
