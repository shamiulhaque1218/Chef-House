// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSign from './GoogleSign';
import GithubSign from './GithubSign';

const Login = () => {
  const {signUser} = useContext(AuthContext);
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(`Submitted email: ${email}, password: ${password}`);
    setError('');
    event.target.reset();
    signUser(email,password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate("/")
    })
    .catch((error) => {
      setError(error.message);
    })
  };

  return (
    <div className='m-20'>

<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmail} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePassword} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Log in</button>
      <Link className='bg-rose-400 ml-5 text-white rounded-md p-2' to="/registration">Please Register !</Link> <br />
      {
      error
      }

      <div className='my-5'>
      <GoogleSign> </GoogleSign>
      </div>
      <div className='my-5'>
      <GithubSign> </GithubSign>
      </div>
    </form>
    
    </div>
  );
};

export default Login;