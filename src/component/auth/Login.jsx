import { useRef, useState } from 'react';
import { useAuth } from './useAuth';
import { Link, useNavigate } from 'react-router-dom';
export default function Login (){
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard');
    } catch(error) {
      const errorMessage = error.message.match(/auth\/([^)]+)/);
      setError(errorMessage[1]);
    }
    }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-[url('/login.svg')] bg-no-repeat bg-center bg-contain">
      {error && <div className="absolute top-0 right-0 bg-clRed text-white px-8 lg:px-10 py-1 flex justify-center items-center">{error}</div>}
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
    <div className="p-6 sm:p-8 space-y-4">
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-2">Login</h1>

      <form 
      onSubmit={handleSubmit} 
      className="flex flex-col items-start space-y-3">
      <label htmlFor="email"
      className="block text-md font-medium text-gray-900">Email</label>
        <input
         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          type="email"
          placeholder="Your Email"
          required
          ref={emailRef}
        />

        <label htmlFor="password"
        className="block text-sm font-medium text-gray-900">Password</label>
        <input
         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          type="password"
          placeholder="Your Password"
          required
          ref={passwordRef}
        />
        <button type="submit" className="w-full text-white mb-6 bg-clRed hover:bg-opacity-80 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
      </form>
      <p>Need to Signup? <Link to="/signup" className="font-medium text-gray-600 hover:underline">Create Account</Link></p>
    </div>
    </div>
    </div>
  )
}

