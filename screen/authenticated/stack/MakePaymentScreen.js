import React, { useState } from 'react'
import { Text, View ,SafeAreaView ,StatusBar, Button } from 'react-native'
import { get } from '../../../services/ApiServices';


export const MakePaymentScreen = ({ route, navigation }) => {

  const  [couponsData , setCouponsData] = useState([]);

  const { shopId , upiId, userName, amount} = route.params;

  const getCoupons  = ()=>{
      get('users-coupons').then((res)=>{
          setCouponsData(res);
          console.log(data);
      }).catch((err)=>console.log(err));
  }
  getCoupons();
  // couponsData.length === undefined ? getCoupons() : null;

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
        title="Pay"
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
