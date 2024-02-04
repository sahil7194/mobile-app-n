import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'

export const HistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      history Screen
    </Text>
    <Button
        title="Go to DonePaymentInfo"
        onPress={() => navigation.navigate('DonePaymentInfo')}
      />
    </View>
  </SafeAreaView>
  )
}
