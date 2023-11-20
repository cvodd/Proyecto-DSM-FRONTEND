import { View, Text, SafeAreaView, Platform, StyleSheet, TextInput, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RegisterScreen = ({navigation}) => {

  const irLogin = () => {
    navigation.navigate('Login')
  }
  return (
      <SafeAreaView Style={styles.container}>
        <View style={styles.body}>
        <View>
          <Text>Registro de usuario</Text>
        </View>
          <View>
            <View style={styles.contentInput}>
              <TextInput placeholder='Nombre' />
            </View>
            <View style={styles.contentInput}>
              <TextInput placeholder='Apellido' />
            </View>
            <View style={styles.contentInput}>
              <TextInput placeholder='Nombre de Usuario' />
            </View>
            <View style={styles.contentInput}>
              <TextInput placeholder='Correo Electronico' keyboardType='email-address' />
            </View>
            <View style={styles.contentInput}>
              <TextInput placeholder='Contraseña'  />
            </View>
            <View>
              
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color:'white' ,fontWeight:'bold',textAlign:'center'}}> Registrar </Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress={irLogin}
              style={styles.button}
              >
                <Text style={{ color:'white' ,fontWeight:'bold',textAlign:'center'}}> Login </Text>

              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </SafeAreaView>
  )
};

const styles= StyleSheet.create({
  container:{
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInput: {
    width: 350,
    height: 50,
    borderColor: Colors.gray2,
    borderWidth: 1,
    borderRadius: 10,

  },
  button:{
    'backgroundColor':'green',
    'padding':4,
    'marginHorizontal':20,
    'marginVertical': 20,
    'borderRadius': 10,
},
})

export default RegisterScreen