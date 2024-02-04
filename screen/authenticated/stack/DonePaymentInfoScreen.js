import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'

export const DonePaymentInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        DonePaymentInfoScreen
      </Text>
      <Button
        title="Go to PaymentHistory"
        onPress={() => navigation.navigate('PaymentHistory')}
      />
      </View>
    </SafeAreaView>
  )
}
