import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button } from 'react-native'

export const ScanScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      Scan Screen
    </Text>
    <Button
        title="Go to MakePayment"
        onPress={() => navigation.navigate('MakePayment')}
      />
    </View>
  </SafeAreaView>
  )
}
