import React from 'react'
import { Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  { HistoryScreen} from '../screen/authenticated/Tab/HistoryScreen'
import { HomeScreen} from '../screen/authenticated/Tab/HomeScreen';
import { AccountScreen } from '../screen/authenticated/Tab/AccountScreen';
import {ScanScreen } from '../screen/authenticated/Tab/ScanScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (

     <Tab.Navigator
        screenOptions={{
         headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}  
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Scan" component={ScanScreen} 
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Account" component={AccountScreen} 
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="PaymentHistory" component={HistoryScreen} 
        options={{
          tabBarLabel: 'PaymentHistory',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>

);

export default MainTabNavigator;

