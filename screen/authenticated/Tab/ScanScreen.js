import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button } from 'react-native'
import QRCodeScanner from '../../../components/authenticated/QRCodeScanner'

export const ScanScreen = ({ navigation }) => {
  return (
    <QRCodeScanner></QRCodeScanner>
  )
}
