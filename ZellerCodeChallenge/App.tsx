
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { configureAmplify } from 'services/AWSAmplify';
import { ThemeProvider } from 'contexts/ThemeContext';
import ErrorBoundary from 'react-native-error-boundary'
import ComponentWithError from './src/ComponentWithError';
import { useState } from 'react';
import { Button } from 'react-native';
import ErrorFallbackScreen from 'screens/ErrorFallbackScreen/ErrorFallbackScreen';

configureAmplify()
function App() {

  const [showError, setShowError] = useState(false)
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackScreen} >
          <RootStack />
          <Button title='Show error' onPress={() => { setShowError(true) }} />
          {showError && <ComponentWithError />}
        </ErrorBoundary>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}





export default App;
