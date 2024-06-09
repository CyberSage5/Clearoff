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
    <div className="flex flex-row items-center justify-center md:h-screen lg:py-0">
      {error && <div className="absolute top-0 right-0 bg-clRed text-white px-8 lg:px-10 py-1 flex justify-center items-center">{error}</div>}
 {/* side image */}
 <img
 className="w-1/2 h-screen"
  src="/login.png" alt="signup-image" />

    {/* clearoff's text */}
    <div className="absolute left-6 top-10">
    <h3 className="text-clRed text-3xl font-bold mr-4">Clearoff&nbsp;<span className="text-white bg-clRed rounded-md">.ng</span></h3>
    </div>
    <div className="w-1/2 flex justify-center items-center bg-white mx-auto h-full md:mt-0 sm:max-w-md lg:p-0">
    <div className="w-full p-6 sm:p-8 space-y-4 rounded-lg">
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-2">Login</h1>

      <form 
      onSubmit={handleSubmit} 
      className="flex flex-col items-start space-y-3">
      <label htmlFor="email"
      className="block text-md font-medium text-black">Email</label>
        <input
         className="bg-white border border-black text-black sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          type="email"
          placeholder="Your Email"
          required
          ref={emailRef}
        />

        <label htmlFor="password"
        className="block text-sm font-medium text-black">Password</label>
        <input
         className="bg-gray-50 border border-black text-black sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
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

