import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './app/home';
import Onboarding from './app/onboarding';
import SplashScreen from './app/index';
import { View as DefaultView, Text as DefaultText } from 'react-native';
import { styled } from 'nativewind';
import { ContactsProvider } from './src/context/ContactsContext';

type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const View = styled(DefaultView);
export const Text = styled(DefaultText);

export default function App() {
  return (
    <ContactsProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactsProvider>
  );
} 