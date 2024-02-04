import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar ,Button } from 'react-native'

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        Home Screen
      </Text>
      <Button
        title="Go to Result"
        onPress={() => navigation.navigate('Result',{
          categoryId:1,
          categoryName:"Education"
        })}
      />
      </View>
    </SafeAreaView>
  )
}
