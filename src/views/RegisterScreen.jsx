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
          <Text style={styles.title}>Registro de usuario</Text>
        </View>
          <View>
          <Text style={styles.body}> Nombre </Text>
            <View style={styles.contentInput}>
              <TextInput
              onChangeText={(value) => onChange(value, 'name')}
              value={name}
              placeholder='Ingrese un nombre' />
            </View>
            <Text style={styles.body}> Apellido </Text>
            <View style={styles.contentInput}>
              <TextInput 
              onChangeText={(value) => onChange(value, 'lastName')}
              value={lastName}
              placeholder='Apellido' />
            </View>
            <Text style={styles.body}> Nombre de usuario </Text>
            <View style={styles.contentInput}>
              <TextInput 
              onChangeText={(value) => onChange(value, 'userName')}
              value={userName}
              placeholder='Nombre de Usuario' />
            </View>
            <Text style={styles.body}> Correo Electronico </Text>
            <View style={styles.contentInput}>
              <TextInput 
              onChangeText={(value) => onChange(value, 'email')}
              value={email}
              placeholder='Correo Electronico' keyboardType='email-address' />
            </View>
            <Text style={styles.body}> Contraseña </Text>
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
               dateFormat='day moth year'
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
                <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Registrar </Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress={irLogin}
              style={styles.button2}
              >
                <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Iniciar Sesión </Text>

              </TouchableOpacity>
              
            </View>
          </View>
          
        </View>
      </SafeAreaView>
  )
};

const styles= StyleSheet.create({
  title:{
    'textAlign':'center',
    'fontSize': 20,
    'fontWeight':'bold',
    'marginVertical': 20,
  },
  container:{
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  body: {
    textAlign:'center',
    marginVertical: 10,
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
    'padding':8,
    'marginHorizontal':20,
    'marginVertical': 20,
    'borderRadius': 10,
},
button2:{
  'backgroundColor':'#00aae4',
  'padding':8,
  'marginHorizontal':20,
  'marginVertical': 50,
  'borderRadius': 10,
},
})

export default RegisterScreen