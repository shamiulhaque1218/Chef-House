import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import app from '../firebase/firebase.config';

const GithubSign = () => {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();

    const handelGitSign = () => {
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
        <button onClick={handelGitSign} className="bg-slate-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Login With Github</button>
     </div>
    );
};

export default GithubSign;