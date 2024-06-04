// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useAuth } from '../../auth/useAuth';
// import { Link } from 'react-router-dom'; // Import for navigation links

export default function RightNav () {
   const { currentUser, logout } = useAuth();

  return (
    <div className="bg-[#fdf5f3] w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <p>{currentUser.email}</p>
    <div className="h-full px-3 py-4">
       <ul className="space-y-2 font-medium">
       {/* <li>
            <a href="#" class="flex items-center p-2 text-gray-800 rounded-lg hover:text-gray-50 hover:bg-clRed group">
            <svg class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
            </svg>
            <span class="ms-3">Home</span>
            </a>
         </li> */}
         <li>
            <a href="#" className="flex items-center p-2 text-gray-800 rounded-lg  hover:bg-clRed group-hover:text-blue-50 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-blue-50">Products</span>
            </a>
         </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-800 rounded-lg  hover:bg-clRed group">
             <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
             <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
             </svg>

                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-blue-50">Create Ad</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-800 rounded-lg  hover:bg-clRed group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 400 group-hover:text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-blue-50">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-gray-50 bg-gray-500 rounded-full 0 300 group-hover:text-clRed group-hover:bg-gray-50 group">3</span>
             </a>
          </li>
          <li onClick={logout}>
             <a href="#" className="flex items-center p-2 text-gray-800 rounded-lg  hover:bg-clRed group">
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
            </svg>

                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-blue-50">Signout</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-gray-50 bg-gray-500 rounded-full 0 300 group-hover:text-clRed group-hover:bg-gray-50 group">3</span>
             </a>
          </li>
       </ul>
    </div>
 </div>
 
  );
}
