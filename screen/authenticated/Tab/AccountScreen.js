import React, { useContext } from 'react'
import { Text, View, SafeAreaView, StatusBar, Button } from 'react-native'
import { AuthContext } from '../../../Context/AuthContext';
import { removeData } from '../../../services/LocalStorageService'
import { TouchableOpacity } from 'react-native';

export const AccountScreen = ({ navigation }) => {

  const { auth, setAuth } = useContext(AuthContext);

  const logout = () => {
    // remove token and navigate to login screen
    console.log('Logging out');
    removeData("auth_token");
    setAuth(false);
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <View>
        <Text className="text-lg p-2 m-1">
          Account Screen
        </Text>

        <View className="m-2 divide-y divide-slate-700">
          <TouchableOpacity
            className="p-2 mb-2"
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="p-2 mb-2"
            onPress={() => navigation.navigate('EditPassword')}
          >
            <Text>
              Edit Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="p-2 mb-2"
            onPress={() => logout()}
          >
            <Text>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}
