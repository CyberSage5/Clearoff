/* eslint-disable no-unused-vars */
import React from 'react'

export default function TopNav() {
  return (
    <nav className="bg-[#ff936c] shadow-sm sticky top-0 z-10">
  <div className="max-w-screen flex justify-between items-center mx-auto p-4">
    
      <span className="flex w-1/6 self-center text-3xl md:ml-4 font-semibold whitespace-nowrap text-white">
        Clearoff <span className='text-clRed'>.</span>
      </span>

      <form className="hidden md:flex items-center md:flex-grow mx-4">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className='relative flex-grow mr-2'>
        <div className="absolute z-10 inset-y-0 end-5 flex items-center ps-5k pointer-events-auto">
            <svg className="w-4 h-4 text-clRed " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="default-search" className="flex items-center w-full p-3 ps-4 text-sm text-gray-900 rounded-xl bg-gray-50 outline-none relative" placeholder="Search Mockups, Logos..." required />
    </div>
        
</form>

    <div className="flex-none md:order-2 items-center">

      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className="md:hidden text-clRed hover:bg-gray-100 focus:outline-none hover:-translate-y-1 transition-all text-sm p-2.5 me-1 rounded-lg"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>

  
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-clRed rounded-lg md:hidden focus:outline-none hover:-translate-y-1 transition-all"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        {/* <span className="sr-only">Open main menu</span> */}
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>


    </div>
      <div className='hidden w-1/6 items-center md:flex md:justify-end px-auto'>
      <div className='mr-4'>
      <svg className="w-8 h-8 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
</svg>
      </div>
        <img
        className='size-[2.4rem] rounded-xl border border-gray-50 p-0.5'
         src="/profile.jpg" alt="profile-image" />
      </div>
  </div>
</nav>

  )
}
