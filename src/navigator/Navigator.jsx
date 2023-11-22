import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { StackActions } from '@react-navigation/native'
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../views/HomeScreen'
import { AuthContext } from '../context/AuthContext'
import { BottomBarNavigator } from './BottomBarNavigator'

const Stack= createNativeStackNavigator();

export const Navigator = () => {

  const {status} =useContext(AuthContext);  


  if(status==='checking'){
    return<LoginScreen/>
  }
  return (
    <Stack.Navigator  
      screenOptions={{
        headerShown: false,
      }}
      
      >
      {
      (status !== 'authenticated')
      ?(
        <>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        </>
      )
      :( 
        <>
        <Stack.Screen name="BottomTab" component={BottomBarNavigator}/>
        </>
      )
      }
    </Stack.Navigator>
  )
}

