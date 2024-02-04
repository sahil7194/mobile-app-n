import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'

export const DonePaymentInfoScreen = ({ route,navigation }) => {

  const {shopId,paymentStatus, amount, transactionId,usedCuponCodeId} = route.params;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        DonePaymentInfoScreen
      </Text>
      <Text>
       Shop id : {shopId}
      </Text>
      <Text>
       Payment Status : {paymentStatus}
      </Text>
      <Text>
        Amount : { amount}
      </Text>
      <Text>
       Transaction Id : {transactionId}
      </Text>
      <Text>
       Used Cupon Code Id: {usedCuponCodeId}
      </Text>
      <Button
        title="Go to PaymentHistory"
        onPress={() => navigation.navigate('PaymentHistory')}
      />
      </View>
    </SafeAreaView>
  )
}
