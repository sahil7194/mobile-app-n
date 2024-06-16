import Unauthenticated from './navigation/Unauthenticated';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { AuthContext } from './Context/AuthContext';
import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { ToastProvider,Icon } from 'react-native-toast-notifications'

export default function App() {

  const [auth, setAuth] = useState(false);

  return (
    <ToastProvider
    icon={<Icon />}
    // successIcon={<SuccessIco />}
    // dangerIcon={<DangerIcon />}
    // warningIcon={<WarningIcon />}
    >
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthContext.Provider value={{ auth, setAuth }}>
          <PaperProvider>
            <NavigationContainer>
              {
                !auth ? <Unauthenticated /> : (
                  <>
                    <StackNavigation />
                  </>
                )
              }
            </NavigationContainer>
          </PaperProvider>
        </AuthContext.Provider>
      </ApplicationProvider>
    </ToastProvider>
  );
}
