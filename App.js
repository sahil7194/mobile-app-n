import Unauthenticated from './navigation/Unauthenticated';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation'

const isAuthenticated = true;

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {
          !isAuthenticated ? <Unauthenticated/> : (
            <>
            <StackNavigation/>
            </>
          )
        }
      </NavigationContainer>
    </PaperProvider>
  );
}
