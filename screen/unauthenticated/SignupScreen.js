import React, { useState , useContext} from 'react'
import { Text, View, SafeAreaView, StatusBar, Button, TextInput } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useNavigation, useRoute } from '@react-navigation/native'

import { signUp } from '../../services/UnauthticatedService';
import { AuthContext } from '../../Context/AuthContext';

export const SignupScreen = () => {

  const navigation = useNavigation();

  const { auth, setAuth } = useContext(AuthContext);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('2023-04-15');

  const signupForm = () => {
    const postData = {
      "first_name": firstName,
      "last_name": lastName,
      "mobile_number": mobileNumber,
      "email": email,
      "password": password,
      "date_of_birth": dateOfBirth,
      "register_by": "mobile"
    }

     signUp(postData).then((res) => { 
      console.log(res)
      if (respsone.status == "success") {
        storeData('auth_token', respsone.token);
        setAuth(true);
        
      }
    }).catch((err) => console.log(err));    

  }
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
        <Text>
          SignupScreen
        </Text>
        <View className="border border-yellow-500 p-3">

          <TextInput
            placeholder="Enter First Name"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            className="border border-l-black p-2 px-3 h-14 rounded-lg my-4"
            onChangeText={(value) => setFirstName(value)}
          />

          <TextInput
            placeholder="Enter Last Name"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            className="border border-l-black p-2 px-3 h-14 rounded-lg my-4"
            onChangeText={(value) => setLastName(value)}
          />
          
          <TextInput
            placeholder="Enter Mobile Number"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            className="border border-l-black p-2 px-3 h-14 rounded-lg my-4"
            onChangeText={(value) => setMobileNumber(value)}
          />

          <TextInput
            placeholder="Enter Email"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            className="border border-l-black p-2 px-3 h-14 rounded-lg my-4"
            onChangeText={(value) => setEmail(value)}
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
            onChangeText={(value) => setPassword(value)}
          />

          <Button
            title="Signup"
            className="mt-5"
            onPress={() => signupForm()}
          />

        </View>
      </View>
    </SafeAreaView>
  )
}
