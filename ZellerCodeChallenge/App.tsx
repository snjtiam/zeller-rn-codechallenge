
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { configureAmplify } from 'services/AWSAmplify';
import { ThemeProvider } from 'contexts/ThemeContext';
import ErrorBoundary from 'react-native-error-boundary'
import ErrorFallbackScreen from 'screens/ErrorFallbackScreen/ErrorFallbackScreen';

configureAmplify()
function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackScreen} >
          <RootStack />
        </ErrorBoundary>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}





export default App;
