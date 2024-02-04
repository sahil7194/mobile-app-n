import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgetPasswordScreen} from '../screen/unauthenticated/ForgetPassWordScreen';
import { LoginScreen } from '../screen/unauthenticated/LoginScreen';
import { SignupScreen } from '../screen/unauthenticated/SignupScreen';
import { ResetPasswordScreen } from '../screen/unauthenticated/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

const Unauthenticated = () => (
  <Stack.Navigator 
  screenOptions={{
    headerShown: false
   }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
);

export default  Unauthenticated;