import { View, Text, Touchable, TouchableOpacity,StyleSheet,TextInput,Keyboard } from 'react-native'
import { useContext } from 'react';
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
      <Text style={styles.title}> Iniciar Sesión</Text>
      <Text style={{textAlign:'center'}}> Email </Text>
      <View style={styles.body}>
              <TextInput 
              style={styles.contentInput}
                  onChangeText={(value) =>onChange(value, 'email')}
                  values={email}
                 placeholder='Correo Electronico' 
                />
      </View>
            <Text style={{textAlign:'center'}}> Contraseña </Text>
      <View 
          style={ styles.body}
      >
              <TextInput 
              style={styles.contentInput}
                onChangeText={(value) =>onChange(value, 'password')}
                values={password}
                placeholder='Contraseña' />
            </View>
          <TouchableOpacity
          onPress={onLogin}
          style={styles.button}
          >
            <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Iniciar Sesión </Text>
          </TouchableOpacity>

  

      <TouchableOpacity
      onPress={irRegistro}
      style={styles.button2}
      >
        <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Crear cuenta </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
  title:{
    'textAlign':'center',
    'fontSize': 20,
    'fontWeight':'bold',
    'marginVertical': 20,
  },
  contentInput: {
    width: 350,
    height: 40,
    borderColor: Colors.gray2,
    borderWidth: 1,
    borderRadius: 10,
    

  },

  body: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    button:{
        'backgroundColor':'#00aae4',
        'padding':8,
        'marginHorizontal':20,
        'marginVertical': 50,
        'borderRadius': 10,
    },

    button2:{
        'backgroundColor':'green',
        'padding':8,
        'marginHorizontal':20,
        'marginVertical': 20,
        'borderRadius': 10,
    },
})
    

 



export default LoginScreen