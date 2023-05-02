// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loader,setLoader] =useState(true);
    // eslint-disable-next-line no-unused-vars
    const registerUser = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signUser = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }
    const [user,setUser] = useState(null);
    
    useEffect(() => {
       const unsubscribe = onAuthStateChanged (auth, loggedUser => {
            console.log("login user observer",loggedUser);
            setUser(loggedUser);
            setLoader(false);
        })
        return () => {
             unsubscribe();
        }
    },[])
    const authInfo ={
        registerUser, signUser, user, logOut, loader,
    };
    return <AuthContext.Provider value={authInfo}>
        {children}
         </AuthContext.Provider>

};

export default AuthProvider;