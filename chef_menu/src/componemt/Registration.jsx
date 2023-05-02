// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Registration = () => {

  const {registerUser} = useContext(AuthContext);
  //console.log(registerUser);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoUrl] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePhotoUrl = (event) => {
    setPhotoUrl(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name,email,password,photoURL);
    // eslint-disable-next-line no-useless-escape
    if(!/(?=.{6,8}$)/.test(password)) {
      setError("wrong password give 6 to 8 character");
       return;
    }
    if(name,email,password,photoURL
      ) {
      registerUser(email,password)
      .then ((result) => {
        console.log(result.user);
      }).catch((err) => {
        console.log(err.message)
      })
    }
    
    //console.log(`Submitted name: ${name}, email: ${email}, password: ${password}, photo URL: ${photoUrl}`);
    // You can add logic here to submit the form to a server or perform other actions.
  };

  return (
    <div className='m-20'>

<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmail} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePassword} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="photoUrl" className="block text-gray-700 font-bold mb-2">Photo URL:</label>
        <input type="text" id="photoUrl" value={photoURL} onChange={handlePhotoUrl} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Register Now</button>
      <Link to="/login"> Please logIn </Link> <br />
      { 
      error
      }
    </form>
   

    </div>
  );
};

export default Registration;