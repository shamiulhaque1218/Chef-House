// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Audio } from  'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return  <Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      />
    }
    if(user) {
        return children;
    }
    return <Navigate to="/login" > </Navigate>
};

export default PrivateRoute;