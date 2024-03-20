import Unauthenticated from './navigation/Unauthenticated';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { AuthContext }  from './Context/AuthContext';
import { useState } from 'react';

export default function App() {

  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{auth,setAuth}}>
    <PaperProvider>
      <NavigationContainer>
        {
          !auth ? <Unauthenticated/> : (
            <>
            <StackNavigation/>
            </>
          )
        }
      </NavigationContainer>
    </PaperProvider>
    </AuthContext.Provider>
  );
}
