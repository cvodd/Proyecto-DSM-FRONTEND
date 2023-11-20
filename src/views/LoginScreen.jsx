import { View, Text, Touchable, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { userApi } from '../api/userApi'






const LoginScreen = ({navigation}) => {

    const irRegistro = () => {
        navigation.navigate('Register')
      }

      const consultarApi = async() => {
        const response = await userApi.get('http://10.0.2.2:8000/api/users');
        console.log(response.data)
      }
  return (
    <View>
      <Text> LoginScreen </Text>
      <TouchableOpacity
      onPress={irRegistro}
      style={styles.button}
      >
        <Text style={{ color:'white' ,fontWeight:'bold',textAlign:'center'}}> Ir a registrar </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={consultarApi}
      style={styles.button2}
      >
        <Text style={{ color:'white' ,fontWeight:'bold',textAlign:'center'}}> Peticion API </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
    button:{
        'backgroundColor':'red',
        'padding':4,
        'marginHorizontal':20,
        'borderRadius': 10,
    },

    button2:{
        'backgroundColor':'green',
        'padding':4,
        'marginHorizontal':20,
        'marginVertical': 20,
        'borderRadius': 10,
    },
})
    

 



export default LoginScreen