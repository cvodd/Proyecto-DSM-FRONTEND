import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const ProfileScreen = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <View>
       
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
})
  

export default ProfileScreen