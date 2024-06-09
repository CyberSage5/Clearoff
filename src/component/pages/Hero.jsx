/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Footer from './footer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Hero() {
  const featuredProducts = [
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: '/pr1.jpg',
      price: 59900,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "Samsung Galaxy S21 Ultra 5G",
      image: '/pr1.jpg',
      price: 119900,
      rating: 4,
      category: "gadgets",
    },
    {
      name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      image: '/pr1.jpg',
      price: 34900,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "MacBook Pro 14-inch, M1 Pro, 16GB RAM",
      image: '/pr1.jpg',
      price: 199900,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
      image: '/pr1.jpg',
      price: 59900,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      image: '/pr1.jpg',
      price: 8900,
      rating: 4,
      category: "home appliances",
    },
    {
      name: "Nespresso VertuoPlus Coffee and Espresso Maker",
      image: '/pr1.jpg',
      price: 14900,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "LG 55-Inch 4K Smart OLED TV",
      image: '/pr1.jpg',
      price: 129900,
      rating: 4,
      category: "home appliances",
    },
    {
      name: "Herman Miller Aeron Ergonomic Office Chair",
      image: '/pr1.jpg',
      price: 109500,
      rating: 5,
      category: "office furniture",
    },
    {
      name: "Standing Desk with Adjustable Height",
      image: '/pr1.jpg',
      price: 49900,
      rating: 4,
      category: "office furniture",
    },
    {
      name: "Office File Cabinet with Lock",
      image: '/pr1.jpg',
      price: 19900,
      rating: 4,
      category: "office furniture",
    },
    {
      name: "LED Desk Lamp with Wireless Charger",
      image: '/pr1.jpg',
      price: 4900,
      rating: 5,
      category: "office devices",
    },
    {
      name: "Canon PIXMA Wireless All-in-One Printer",
      image: '/pr1.jpg',
      price: 9900,
      rating: 4,
      category: "office devices",
    },
    {
      name: "Ergonomic Mesh Office Chair",
      image: '/pr1.jpg',
      price: 15000,
      rating: 4,
      category: "office furniture",
    },
    {
      name: "Portable Air Conditioner with Remote Control",
      image: '/pr1.jpg',
      price: 30000,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "Bluetooth Speaker with Enhanced Bass",
      image: '/pr1.jpg',
      price: 7900,
      rating: 4,
      category: "gadgets",
    },
    {
      name: "Digital Camera with 4K Video",
      image: '/pr1.jpg',
      price: 80000,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "Noise Cancelling Over-Ear Headphones",
      image: '/pr1.jpg',
      price: 25000,
      rating: 4,
      category: "gadgets",
    },
    {
      name: "Electric Kettle with Temperature Control",
      image: '/pr1.jpg',
      price: 6000,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "Adjustable Dumbbells Set",
      image: '/pr1.jpg',
      price: 29900,
      rating: 4,
      category: "other",
    },
  ];

return (
    <>

  <div className="bg-white sticky h-16 top-0 sm:h-20 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div className="text-clRed font-black text-3xl lg:text-4xl">
        Clearoff
      </div>
      <div className="flex items-center">
        <nav className="uppercase text-s text-lg lg:flex items-center hidden">
         <Link to="login" className="py-2 px-6 text-sm flex rounded-md ml-2 border text-clRed border-clRed">
          Login
         </Link>
         <Link to="signup" className="py-2 px-6 ml-3 text-white text-sm flex rounded-md bg-clRed border border-clRed">
          Signup
         </Link>
        </nav>
        {/* drop down menu for small screens */}
        <div className="lg:hidden absolute right-3 top-6">

        <DropdownMenu>
  <DropdownMenuTrigger>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6
  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link to="signup">
    <DropdownMenuItem>Signup</DropdownMenuItem>
    </Link>
    <Link to="login">
    <DropdownMenuItem>Login</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>
        </div>

      </div>
    </div>
  </div>
  
<main className="bg-white h-full">
  <div className="bg-white h-full flex relative z-20 items-center overflow-hidden">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 mb-4 md:-mt-20 lg:mt-4"></span>
        <h1 className="text-6xl sm:text-3xl lg:text-6xl font-black flex flex-col leading-none text-gray-800">
        Sell PreUsed Stuffs. 
        <span className="text-clRed text-6xl sm:text-3xl mb-4 lg:text-6xl">Reduce Waste</span>
        </h1>
        <p className="text-lg sm:text-lg text-gray-700 leading-7 px-2">
        We understand the challenge of decluttering your life and finding new homes for your Used items. That is why we created a platform that makes buying and selling used goods quick, convenient, and hassle-free.!
        </p>
        <div className="flex mt-4">
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-clRed border-clRed border-2 border-transparent text-white text-md mr-4"
          >
            Get started
          </a>
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-clRed text-clRed hover:text-white text-md"
          >
            Read more
          </a>
        </div>
      </div>

      {/* blob background */}
      <div className="z-0">
        <img src="/blobBg.svg" className="hidden lg:block absolute -top-24" alt="" />
        </div>
      {/* boxes image */}
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img
          src="/Hero.png"
          className="max-w-lg md:max-w-2xl z-10 m-auto md:-mt-12 md:ml-24"
          />      
      </div>
    </div>
  </div>
</main>

    
      {/* About */}
      <div className="p-10 lg:p-14 flex flex-col-reverse justify-between items-center lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 border-b pb-7 border-b-clRed">About Us</h2>
          <p className="lg:text-lg">
            We are passionate about creating a sustainable and efficient way to declutter your space and give used items a second life. Whether you are downsizing, making room for new things, or simply clearing out clutter, ClearOff offers a solution that benefits you and the environment.
          </p>
        </div>
        <img className="mb-16 lg:mb-0 lg:size-1/2 hidden lg:block" src="/AboutUs.svg" alt="" />
      </div>

      {/* Featured products */}
      <div className="pt-14 px-6 bg-gray-50 lg:p-14 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-extrabold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}