import React, { useState } from 'react'
import { Text, View, SafeAreaView, StatusBar, Button, TextInput } from 'react-native'
import { post } from '../../../services/ApiServices';
import { retrieveData } from '../../../services/LocalStorageService';

export const EditPasswordScreen = ({ navigation }) => {

  // const getToken = async () => {
  //   // console.log('ss');
  //     const token = await retrieveData('auth_token');
  //     console.log(token);
  //     return token;
  // };


  const [password, setPassword] = useState("");

  const [cn_password, setCnPassword] = useState("");

  const handleTextChange = (filed, value) => {
    //  TODO:add logic for password
    if (filed === "password") {
      setPassword(value);
    }

    if (filed === "cn_password") {
      setCnPassword(value);
    }
  }

  const updatePassword = () => {

    if (password === cn_password) {
      const postData = {
        "new_password": password,
        "confirm_password": cn_password
      }
      post('change-password', postData).then((res) => {
        console.log(res, postData);

      }).catch((err) => {
        console.error(err)
      });
    } else {
      alert('New and Confirm Password Shoud be Same');
    }

  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
        <Text className="text-lg font-bold m-3">
          EditPasswordScreen
        </Text>
        <View className="border border-red-500 m-2 p-4 rounded" >

          <TextInput
            name="password"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            className="border border-l-black p-2 px-3 h-14 rounded-lg mb-3"
            enablesReturnKeyAutomatically
            onChangeText={(value) => handleTextChange("password", value)}
          />

          <TextInput
            name="password"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            className="border border-l-black p-2 px-3 h-14 rounded-lg mb-4"
            enablesReturnKeyAutomatically
            onChangeText={(value) => handleTextChange("cn_password", value)}
          />
          <Button
            title="Change Password"
            onPress={() => updatePassword()}
          />
          {/* <Button
            title="Go to Account"
            onPress={() => navigation.navigate('Account')}
          /> */}
        </View>

      </View>
    </SafeAreaView>
  )
}
