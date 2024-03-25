import Unauthenticated from './navigation/Unauthenticated';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { AuthContext }  from './Context/AuthContext';
import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {

  const [auth, setAuth] = useState(false);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
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
    </ApplicationProvider>
  );
}
