import Unauthenticated from './navigation/Unauthenticated';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { isAuthenticated} from './services/UnauthticatedService';

const auth = false;

export default function App() {
  return (
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
  );
}
