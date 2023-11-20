import { View, Text } from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native'
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack= createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator  
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Login" component={LoginScreen}/>
    
        <Stack.Screen name="Register" component={RegisterScreen}/>

    </Stack.Navigator>
  )
}

export default Navigator