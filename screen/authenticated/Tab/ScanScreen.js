import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button } from 'react-native'

export const ScanScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
      Scan Screen
    </Text>
    <Text>
      Following options show after scan qr code 
    </Text>
    <Button
        title="Go to MakePayment"
        onPress={() => navigation.navigate('MakePayment',{
          shopId:1,
          upiId:"testuser@yabl",
          userName:"Test User",
          amount:500,
        })}
      />
      <Button
        title="Go to ShopInfo"
        onPress={() => navigation.navigate('ShopInfo', {shopId:1})}
      />
    </View>
  </SafeAreaView>
  )
}
