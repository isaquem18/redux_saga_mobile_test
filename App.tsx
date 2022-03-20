import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {
  Ubuntu_400Regular,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';

import theme from './src/styles/theme';
import { Routes } from './src/routes';
import store from './src/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
