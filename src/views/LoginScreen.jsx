import { View, Text, Touchable, TouchableOpacity,StyleSheet,TextInput,Keyboard } from 'react-native'
import { useContext } from 'react';
import React from 'react'
import { userApi } from '../api/userApi'
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';






const LoginScreen = ({navigation}) => {

    const irRegistro = () => {
        navigation.navigate('Register')
      }

    const {email, password, onChange} =useForm({
      email: '',
      password: '',
    })

      const consultarApi = async() => {
        const response = await userApi.get('http://10.0.2.2:8000/api/users');
        console.log(response.data)
      }

      const onLogin = () =>{
        Keyboard.dismiss();
        signIn({email, password})
      }

    const {signIn} = useContext(AuthContext);
  return (
    <View>
      <Text style={{textAlign:'center'}}> LoginScreen </Text>
      <Text style={{textAlign:'center'}}> Email </Text>
      <View style={styles.contentInput}>
              <TextInput 
                  onChangeText={(value) =>onChange(value, 'email')}
                  values={email}
                 placeholder='Correo Electronico' 
                />
            </View>
            <Text style={{textAlign:'center'}}> Contraseña </Text>
      <View 
          style={styles.contentInput}
      >
              <TextInput 
                onChangeText={(value) =>onChange(value, 'password')}
                values={password}
                placeholder='Contraseña' />
            </View>
          <TouchableOpacity
          onPress={onLogin}
          style={styles.button}
          >
            <Text style={{ color:'white' ,fontWeight:'bold',textAlign:'center'}}> Login </Text>
          </TouchableOpacity>

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