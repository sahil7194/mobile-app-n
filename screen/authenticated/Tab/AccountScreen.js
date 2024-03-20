import React, { useContext } from 'react'
import { Text, View ,SafeAreaView ,StatusBar , Button } from 'react-native'
import { AuthContext } from '../../../Context/AuthContext';
import { removeData } from '../../../services/LocalStorageService'

export const AccountScreen = ({ navigation }) => {

  const {auth , setAuth} = useContext(AuthContext);

  const logout = () => {
    // remove token and navigate to login screen
    console.log('Logging out');
    removeData("auth_token");
    setAuth(false);
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
      <Text>
        Account Screen
      </Text>
      <Button
        title="Go to EditPassword"
        onPress={() => navigation.navigate('EditPassword')}
      />
      <Button
        title="Go to EditProfile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Button
        title="Log Out"
        onPress={() => logout()}
      />
      </View>
    </SafeAreaView>
  )
}
