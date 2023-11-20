/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { Navigator } from './src/navigator/Navigator';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({children}) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <AppState>
        <Navigator/>
      </AppState>
      
    </NavigationContainer>
  )
}

export default App;
