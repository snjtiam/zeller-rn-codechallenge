import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from 'screens/UsersScreen/UsersScreen';



const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Users" component={UsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

