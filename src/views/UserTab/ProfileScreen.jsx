import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useContext,useState,useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = () => {
 
  const { logOut, getUser } = useContext(AuthContext);
  const [user, setUserData] = useState(null);
 
useEffect(() => {setUserData(getUser);
  console.log(user);});

 
  if (!user) {

    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando perfil...</Text>
        <TouchableOpacity
            onPress={logOut}
            style={styles.button}
        >
        <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Cerrar Sesión </Text>
      </TouchableOpacity>
      </View>
      
    );
  }
  return (
    
    <View>
         <View style={styles.container}>
      <Text style={styles.label}>Nombre: {user.name}</Text>
      <Text style={styles.label}>Apellido: {user.lastName}</Text>
      <Text style={styles.label}>Nombre de usuario: {user.userName}</Text>
      <Text style={styles.label}>Fecha de nacimiento: {user.birthDate}</Text>
      <Text style={styles.label}>Correo electrónico: {user.email}</Text>
    </View>
        <TouchableOpacity
            onPress={logOut}
            style={styles.button}
        >
        <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Cerrar Sesión </Text>
      </TouchableOpacity>
    </View>
)
}

const styles= StyleSheet.create({
  button:{
      'backgroundColor':'#00aae4',
      'padding':8,
      'marginHorizontal':20,
      'marginVertical': 50,
      'borderRadius': 10,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
  

export default ProfileScreen