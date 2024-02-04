import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar, Button } from 'react-native'


export const MakePaymentScreen = ({ route, navigation }) => {

  const { shopId , upiId, userName, amount} = route.params;

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        MakePaymentScreen
      </Text>
      <Text>
        ShopId : { shopId}
      </Text>
      <Text>
        upiId : { upiId}
      </Text>
      <Text>
        UserName : { userName}
      </Text>
      <Text>
        amount : { amount}
      </Text>
      <Button
        title="Go to DonePaymentInfo"
        onPress={() => navigation.navigate('DonePaymentInfo',{
          shopId:shopId,
          paymentStatus:"Done",
          amount:amount,
          transactionId: '012345678901@upi',
          usedCuponCodeId:'123abc456'
        })}
      />
      </View>
    </SafeAreaView>
  )
}
