import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export const AfterQrCodeScanScree = () => {
  const navigation = useNavigation();
    const route = useRoute();
    console.log(route.params);


  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
    AfterQrCodeScanScree    
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
