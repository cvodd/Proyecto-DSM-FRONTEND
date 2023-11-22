import { View, Text, SafeAreaView, Platform, StyleSheet, TextInput, Touchable, TouchableOpacity, Pressable,Keyboard} from 'react-native'
import React from 'react'
import { useContext, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import DateTimePicker from '@react-native-community/datetimepicker';


const RegisterScreen = ({navigation}) => {


  const [showDatePicker, setShowDatePicker] = useState(false)

  const toggleDatePicker = () =>{
    setShowDatePicker(!showDatePicker)
  }
  const [date, setDate] = useState(new Date());
  const onChangeDate= ({type}, selectedDate) => {
    if(type =="set"){
      const currentDate = selectedDate;
      setDate(currentDate);

      if(Platform.OS === 'android'){
        toggleDatePicker();
        console.log(currentDate)
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
      
        // Actualizar el estado birthdate con la fecha formateada
        onChange(formattedDate, 'birthDate');
      }

    }
    else{
      
      toggleDatePicker();
    }
  }
  
  
  const irLogin = () => {
    navigation.navigate('Login')
  }

  const {signUp} = useContext(AuthContext)
  const onSignIn = () => {
    Keyboard.dismiss();
    signUp({ name, lastName, userName, email, password, birthDate})
}
 const {name, lastName, userName, email, password, birthDate,onChange}= useForm({
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    birthDate: '',

  })

  return (
      <SafeAreaView Style={styles.container}>
        <View style={styles.body}>
        <View>
          <Text>Registro de usuario</Text>
        </View>
          <View>
            <View style={styles.contentInput}>
              <TextInput
              onChangeText={(value) => onChange(value, 'name')}
              value={name}
              placeholder='Nombre' />
            </View>
            <View style={styles.contentInput}>
              <TextInput 
              onChangeText={(value) => onChange(value, 'lastName')}
              value={lastName}
              placeholder='Apellido' />
            </View>
            <View style={styles.contentInput}>
              <TextInput 
              onChangeText={(value) => onChange(value, 'userName')}
              value={userName}
              placeholder='Nombre de Usuario' />
            </View>
            <View style={styles.contentInput}>
              <TextInput 
              onChangeText={(value) => onChange(value, 'email')}
              value={email}
              placeholder='Correo Electronico' keyboardType='email-address' />
            </View>
            <View style={styles.contentInput}>
              <TextInput 
              onChangeText={(value) => onChange(value, 'password')}
              value={password}
              placeholder='Contraseña'  />
            </View>
            <View>
             <Text style={styles.body}>Fecha de nacimiento</Text>

             {showDatePicker && (
               <DateTimePicker
               testID="dateTimePicker"
               value={date}
               mode='date'
               dateFormat='year month day'
               display="spinner"
               onChange={onChangeDate}
               />
             )}

              {!showDatePicker  && (
               <Pressable onPress={toggleDatePicker}>
               <TextInput
                  style={styles.contentInput}
                  placeholder='Fecha de nacimiento'
                  onChangeText={(date) => onChange(date, 'birthDate')}
                  value={birthDate}
                  editable={false}
              >
             </TextInput>
             </Pressable>)}
           

            </View>
            <View>
              <TouchableOpacity 
              style={styles.button}
              onPress={onSignIn}
              >
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