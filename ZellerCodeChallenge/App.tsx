
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { configureAmplify } from 'services/AWSAmplify';
import { ThemeProvider } from 'contexts/ThemeContext';


configureAmplify()
function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootStack />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}





export default App;
