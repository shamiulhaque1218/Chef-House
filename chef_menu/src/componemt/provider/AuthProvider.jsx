// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const registerUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    };
    const authInfo ={
        registerUser, signUser,
    };
    return <AuthContext.Provider value={authInfo}>
        {children}
         </AuthContext.Provider>

};

export default AuthProvider;