import React, { useState } from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button} from 'react-native'
import DatePicker from 'react-native-date-picker'

export const SignupScreen = ({ navigation }) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
    <View>
    <Text>
    SignupScreen
    </Text>
    <View className="border border-yellow-500 h-1/2 p-3">
    
     <DatePicker date={date} onDateChange={setDate} />
    </View>
    <Button
        title="Go to Login "
        onPress={() => navigation.navigate('Login')}
      />

    </View>
  </SafeAreaView>
  )
}
