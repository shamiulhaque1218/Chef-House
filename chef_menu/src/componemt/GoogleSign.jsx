import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import app from '../firebase/firebase.config';

const GoogleSign = () => {

    const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const handelGoogleSign = () => {
signInWithPopup(auth,provider)
.then(result => {
const user = result.user;
console.log(user);
})
.catch(error => {
console.log(error.message);
})
}


    return (
        <div>
           <button onClick={handelGoogleSign} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Log in With Google</button>
        </div>
    );
};

export default GoogleSign;

