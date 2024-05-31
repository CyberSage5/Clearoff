import {signInWithEmailAndPassword} from "firebase/auth"
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { auth } from '../client/client'
export default function Login (){
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      navigate("/home");
    } catch (error) {
        console.error(error);
      }
    }
    //     // get user credentials and store them in sessionStorage
    //     const user = userCredential.user;
    //     sessionStorage.setItem('token', user.accessToken);
    //     sessionStorage.setItem('user', JSON.stringify(user));

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-[url('/login.svg')] bg-no-repeat bg-center bg-contain">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
    <div className="p-6 sm:p-8 space-y-4">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login Page</h1>
      <form 
      onSubmit={handleSubmit} 
      className="flex flex-col items-start space-y-3">
      <label htmlFor="email"
      className="block text-sm font-medium text-gray-900"></label>
        <input
         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          type="email"
          placeholder="Your Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password"
        className="block text-sm font-medium text-gray-900"></label>
        <input
         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          type="password"
          placeholder="Your Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full text-white mb-6 bg-clRed hover:bg-opacity-80 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
      </form>
      <p>Need to Signup? <Link to="/signup" class="font-medium text-gray-600 hover:underline">Create Account</Link></p>
    </div>
    </div>
    </div>
  )
}

