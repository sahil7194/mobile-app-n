import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar, Button } from 'react-native'

export const MakePaymentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
      MakePaymentScreen
      </Text>
      <Button
        title="Go to DonePaymentInfo"
        onPress={() => navigation.navigate('DonePaymentInfo')}
      />
      </View>
    </SafeAreaView>
  )
}
