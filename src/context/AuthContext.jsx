import React, {createContext} from 'react';


// crear contexto
export const AuthContext = createContext();

// crear provider
export const AuthProvider =({children}) =>{
    return(
        <AuthContext.Provider
            value={{
                'name' : 'Vicente',
                
            }}        
        >
            {children}
        </AuthContext.Provider>
    )
}