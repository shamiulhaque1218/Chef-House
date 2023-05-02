// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const registerUser = (name,email,password,)
    const authInfo ={
        user
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
         </AuthContext.Provider>

};

export default AuthProvider;