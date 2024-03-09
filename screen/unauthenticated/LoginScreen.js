import React, { useState } from 'react'
import { Text, View, SafeAreaView, StatusBar, Button, Image, TextInput } from 'react-native';
import { storeData ,retrieveData} from '../../services/LocalStorageService';
import { useMyState } from '../../services/UnauthticatedService';

export const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {

    const {value,   setValueAndUpdate,} = useMyState()
    
    const formData = {
      email: email.trim(),
      password: password.trim()
    }
    console.log(value);

  }

  const handleTextChange = (field, value) => {

    if(field === "email"){
      setEmail(value);
    } else if(field === "password"){   
      setPassword(value);
    }
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View className="border border-red-500 h-full p-2">
        <View className="border border-green-500 h-1/2">
          <Text>
            Login Title with image
          </Text>
        </View>
        <View className="border border-yellow-500 h-1/2 p-3">
          <TextInput
            placeholder="Enter Email"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            className="border border-l-black p-2 px-3 h-14 rounded-lg my-4"
            onChangeText={(value) => handleTextChange( "email", value )}
          />

          <TextInput
            name="password"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            className="border border-l-black p-2 px-3 h-14 rounded-lg"
            enablesReturnKeyAutomatically
            onChangeText={(value) => handleTextChange( "password", value )}
          />
          <Button title='login'
            className="mt-5" onPress={login}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
