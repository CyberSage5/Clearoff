import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from './useAuth';
// import { db } from '../client/client';  //<<<< import db
// import { setDoc, doc } from 'firebase/firestore';
export default function Signup() {
  const navigate = useNavigate();
  //   let navigate = useNavigate()
  //  const [email, setEmail] = useState('')
  //  const [password, setPassword] = useState('')
  // // //  const [name, setName] = useState('')
  
  //     async function handleSubmit(e){
  //     e.preventDefault()
  //     console.log(email,password)
  
  //     try {
  //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //       console.log(userCredential)

        
        
  //   const username = email.substring(0, email.indexOf('@'));
  //     const profileImg = `https://eu.ui-avatars.com/api/?name=${username}&background=ff936c&color=ffffff`;

  //     await setDoc(doc(db, "users", userCredential.user.uid), {
  //       displayName: username,
  //       email: email,
  //       uid: userCredential.user.uid,
  //       photoURL: profileImg,
  //     });
        // const username = email?.substring(0, email.indexOf('@'))
        // console.log(username)
        // const profileImg = `https://eu.ui-avatars.com/api/?name=${username}&background=ff936c&color=ffffff`;

        // await setDoc(doc(db, "users", userCredential.user.uid), {
        //   displayName: username,
        //   email: email,
        //   uid: userCredential.user.uid,
        //   photoURL: profileImg,
          
        //   // createdAt: serverTimestamp(),
        // });
        
  //       const user = userCredential.user;
  //       sessionStorage.setItem('token', user.accessToken);
  //       sessionStorage.setItem('user', JSON.stringify(user));
    //     navigate("/login");
        
  
        
        
    //   } catch (error) {
    //     alert(error)
    //     console.log("error creating user:"+ error.message)
    //   }
    //  }
  
    const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }
    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-[url('/SignupBg.svg')] bg-no-repeat bg-center bg-contain">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
    {error && <div className="absolute top-0 right-0 bg-clRed text-white px-8 lg:px-10 py-1 flex justify-center items-center">{error}</div>}
      <div className="p-6 sm:p-8 space-y-4">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign up for an account
        </h1>
        <form
          className="flex flex-col items-start space-y-3"
          onSubmit={handleSubmit}>
         {/* <label for="fullName" class="block text-sm font-medium text-gray-900 dark:text-white">Full name</label>
        <input 
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder='Fullname'
          name='fullName'
          onChange={(e) => setName(e.target.value)}
          required=""
        /> */}
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Your email</label>
        <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          placeholder='Email'
          name='email'
          ref={emailRef}
          required=""
        />
        
         <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
        <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          placeholder='Password'
          name='password'
          type="password"
          ref={passwordRef}
          required=""
        />
         <label htmlFor="password" className="block text-sm font-medium text-gray-900">Confirm Password</label>
        <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
          placeholder='Password'
          name='password'
          type="password"
          ref={passwordConfirmRef}
          required=""
        />
  
        <button 
        disabled={loading}
        className="w-full text-white mb-6 bg-clRed hover:bg-opacity-80 focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type='submit'>
          Submit
        </button>
  
  
      </form>
      <div className="text-sm font-light text-gray-500 mt-4">
      Already have an account? <Link className="font-medium text-gray-600 hover:underline" to='/login'>login</Link> 
      </div>
     
    </div>
    </div>
    </div>
    );
  }
  
  