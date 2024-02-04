import { StyleSheet, Text, View } from 'react-native';
import Unauthenticated from './navigation/Unauthenticated';
import { Stack } from './navigation/Stack';
import  MainTabNavigator  from './navigation/MainTabNavigator';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


const isAuthenticated = true;

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Unauthenticated/>
        {/* <MainTabNavigator></MainTabNavigator> */}
      </NavigationContainer>

    {/* <View>
     {isAuthenticated ?  (
        <>
          <Stack />
          <MainTabNavigator />
        </>
      ) : <Unauthenticated /> }

    </View> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
