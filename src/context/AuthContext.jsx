import React, {createContext, useReducer, useEffect} from 'react';
import { authReducer } from './authReducer';
import { userApi } from '../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


//estado inicial del contexto
const authInitalState ={
    status: 'checking',
    token: null,
    user: null,
    errorMessage: null
}


// crear contexto
export const AuthContext = createContext();



// crear provider
export const AuthProvider =({children}) =>{

    const [state, dispatch] =useReducer(authReducer, authInitalState);
    
    useEffect(() => {
        checkToken();
    },[])

    const checkToken = async () => {

        const token = await AsyncStorage.getItem('token');

        // No token
        if(!token) return dispatch({type: 'notAuthenticated'});

        // Hay token
        try {
            const response = await userApi.get('/token/validate',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status !== 200) {
                return dispatch({ type: 'notAuthenticated' });
            }

            dispatch({
                type: 'signIn',
                payload: {
                    token: response.data.token,
                    user: response.data.user,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    const signUp = async ({name, lastName, userName, email, password, birthDate})=>{
        try {
            const { data } = await userApi.post('/register', { name, lastName, userName, email, password, birthDate });
            console.log(data.user);
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.user
                }
            });

            // Almacenar el token del usuario.
            await AsyncStorage.setItem('token', response.data.token);

        } catch (error) {
            console.log(error.response.data.errors)
            dispatch({
                type: 'addError',
                payload: error.response.data.errors
            })
        }
    }

    const signIn= async ({email,password})=>{
        try{
            const {data} = await userApi.post('/login',{email,password});
            dispatch({
                type: 'signUp',
                payload :{
                    token:data.token,
                    user:data.user
                }
            })
            
        }catch(error){
            console.log(error.response.data);
        }
        
    }

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({
            type: 'logOut'
        })

        
       
    }

    const removeError = () =>{
        dispatch({
            type: 'removeError'
         })
    }

    return(
        <AuthContext.Provider
            value={{
                ...state,
                signIn,
                signUp,
                logOut,
                removeError,
                
            }}        
        >
            {children}
        </AuthContext.Provider>
    )
}