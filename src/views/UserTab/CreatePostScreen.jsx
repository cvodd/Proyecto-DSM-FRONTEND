import { View, Text, ScrollView, Pressable,Alert,StyleSheet, Image, Platform, TouchableOpacity,TextInput} from 'react-native'
import React, {useContext, useState} from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthContext } from '../../context/AuthContext';
import { userApi } from '../../api/userApi';
import { useForm } from '../../hooks/useForm';

import axios from 'axios';

const CreatePostScreen = () => {



  const { user, token } = useContext(AuthContext);

  const [image, setImage] = useState('https://via.placeholder.com/200');
  const [response, setResponse] = useState('');

  const handleChoosePhoto = () => {
    const options = {
      title: 'Seleccionar Imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    launchImageLibrary(options, response => {

      if (response.errorCode) {
        console.log(response.errorMessage)
      } else if (response.didCancel) {
        console.log('El usuario cancelo la acción')
      } else {
        const path = response.assets[0].uri
        setImage(path)
        console.log(path)
        setResponse(response)
      }

    })
  }

  const uploadImage = async () => {
    const uri = Platform.OS === "android" ? response.assets[0].uri : image.replace("file://", "");
    const formData = new FormData();

    // Agregamos la imagen a un formulario con el metodo append.
    formData.append("image", {
      uri,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    });

    try {
      const response = await userApi.post('/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        },
        
      });
      console.log("entro a la funcion");
      if (!response.data.isSuccess) {
        Alert.alert('Image upload failed...')
        return
      }

      return response.data;

    } catch (error) {
      console.log("El error es:", error);
      console.log("error");
    }
  }
  const {title,description,pathPhoto,user_id,likesCount,comments,onChange} = useForm({
    title:'',
    description:"",
    pathPhoto:"",
    user_id:0,
    likesCount:0,
    comments:0
  })

  const formSubmit = async () =>{
  
    const { url } = await uploadImage();
    const uri=url;

    console.log(uri)
   /*const  post= {
      title:'',
      description:"",
      pathPhoto:uri,
      user_id:user.id,
      likesCount:0,
      comments:0
    }*/
    onChange(uri,'pathPhoto')
    try {
      const { data } = await userApi.post('/createPost', {title,description,pathPhoto,user_id,likesCount,comments}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(data);
      Alert.alert('El post fue creado correctamente.');

    } catch (error) {
      console.log("Error en la solicitud:", error);
      console.log(error.response.data.errors)
    }
  }


  return (
    <View>
      <View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() =>handleChoosePhoto()}>
          <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Seleccionar Imagen </Text>
          </TouchableOpacity>
          <Image
            style={{alignSelf:'center',width: 300, height: 300}}
            source={{uri: image}}
          />
        <Text style={styles.body}> Titulo </Text>
            <View style={styles.contentInput}>
              <TextInput
              onChangeText={(value) => onChange(value, 'title')}
              value={title}
              placeholder='Ingrese un titulo' />
            </View>
            <Text style={styles.body}> Descripcion </Text>
            <View style={styles.contentInput}>
              <TextInput
              onChangeText={(value) => onChange(value, 'description')}
              value={description}
              placeholder='Ingrese un titulo' />
            </View>
        <View>
          
        <TouchableOpacity 
          style={styles.button}
          onPress={() =>formSubmit()}>
          <Text style={{ color:'white' ,fontWeight:'bold',fontSize:20,textAlign:'center'}}> Subir post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

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
export default CreatePostScreen