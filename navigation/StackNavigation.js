import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResultScreen }  from '../screen/authenticated/stack/ResultScreen';
import  MainTabNavigator from '../navigation/MainTabNavigator';
import {AvailableCouponsScreen } from '../screen/authenticated/stack/AvailableCouponsScreen';
import { CouponInfoScreen } from '../screen/authenticated/stack/CouponInfoScreen';
import { DonePaymentInfoScreen } from '../screen/authenticated/stack/DonePaymentInfoScreen';
import { EditPasswordScreen } from '../screen/authenticated/stack/EditPasswordScreen';
import { EditProfileScreen} from '../screen/authenticated/stack/EditProfileScreen';
import { MakePaymentScreen} from '../screen/authenticated/stack/MakePaymentScreen';
import { ShopInfoScreen } from '../screen/authenticated/stack/ShopInfoScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator 
  screenOptions={{
    headerShown: false
   }}
  >
    <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
    <Stack.Screen name="Result" component={ResultScreen} />
    <Stack.Screen name="AvailableCoupons" component={AvailableCouponsScreen} />
    <Stack.Screen name="CouponInfo" component={CouponInfoScreen} />
    <Stack.Screen name="DonePaymentInfo" component={DonePaymentInfoScreen} />
    <Stack.Screen name="EditPassword" component={EditPasswordScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="MakePayment" component={MakePaymentScreen} />
    <Stack.Screen name="ShopInfo" component={ShopInfoScreen} />
  </Stack.Navigator>
);

export default  StackNavigation;
