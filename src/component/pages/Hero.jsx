/* eslint-disable no-unused-vars */
// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
export default function Hero() {
  const featuredProducts = [
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "/images/product1.png",
      price: 59900,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "Samsung Galaxy S21 Ultra 5G",
      image: "/images/product2.png",
      price: 119900,
      rating: 4,
      category: "gadgets",
    },
    {
      name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      image: "/images/product3.png",
      price: 34900,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "MacBook Pro 14-inch, M1 Pro, 16GB RAM",
      image: "/images/product4.png",
      price: 199900,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
      image: "/images/product5.png",
      price: 59900,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      image: "/images/product6.png",
      price: 8900,
      rating: 4,
      category: "home appliances",
    },
    {
      name: "Nespresso VertuoPlus Coffee and Espresso Maker",
      image: "/images/product7.png",
      price: 14900,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "LG 55-Inch 4K Smart OLED TV",
      image: "/images/product8.png",
      price: 129900,
      rating: 4,
      category: "home appliances",
    },
    {
      name: "Herman Miller Aeron Ergonomic Office Chair",
      image: "/images/product9.png",
      price: 109500,
      rating: 5,
      category: "office furniture",
    },
    {
      name: "Standing Desk with Adjustable Height",
      image: "/images/product10.png",
      price: 49900,
      rating: 4,
      category: "office furniture",
    },
    {
      name: "Office File Cabinet with Lock",
      image: "/images/product11.png",
      price: 19900,
      rating: 4,
      category: "office furniture",
    },
    {
      name: "LED Desk Lamp with Wireless Charger",
      image: "/images/product12.png",
      price: 4900,
      rating: 5,
      category: "office devices",
    },
    {
      name: "Canon PIXMA Wireless All-in-One Printer",
      image: "/images/product13.png",
      price: 9900,
      rating: 4,
      category: "office devices",
    },
    {
      name: "Ergonomic Mesh Office Chair",
      image: "/images/product14.png",
      price: 15000,
      rating: 4,
      category: "office furniture",
    },
    {
      name: "Portable Air Conditioner with Remote Control",
      image: "/images/product15.png",
      price: 30000,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "Bluetooth Speaker with Enhanced Bass",
      image: "/images/product16.png",
      price: 7900,
      rating: 4,
      category: "gadgets",
    },
    {
      name: "Digital Camera with 4K Video",
      image: "/images/product17.png",
      price: 80000,
      rating: 5,
      category: "gadgets",
    },
    {
      name: "Noise Cancelling Over-Ear Headphones",
      image: "/images/product18.png",
      price: 25000,
      rating: 4,
      category: "gadgets",
    },
    {
      name: "Electric Kettle with Temperature Control",
      image: "/images/product19.png",
      price: 6000,
      rating: 5,
      category: "home appliances",
    },
    {
      name: "Adjustable Dumbbells Set",
      image: "/images/product20.png",
      price: 29900,
      rating: 4,
      category: "other",
    },
  ];

  return (
    <>
      <div className="flex justify-end py-3 px-4 bg-clRed shadow-md">
        <Link to={"/login"}>
          <button className="rounded-md bg-gray-50 text-clRed shadow-sm text-md py-2 px-5 font-medium uppercase transition duration-150 ease-in-out">
            Get started
          </button>
        </Link>
      </div>
      <div className="py-16 px-2 w-full bg-gray-50 flex lg:flex-row justify-center items-center">
        <div className="mx-4 lg:ml-12 w-auto shadow-lg flex flex-col justify-center items-start py-8 bg-gray-50 px-10 lg:w-1/2 border-l-2 border-clRed rounded-md">
          <h1 className="mb-2 text-clRed text-6xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Clearoff
          </h1>
          <h3 className="text-2xl font-bold mb-2">
            Sell PreUsed Stuffs.{" "}
            <span className="text-clRed">Reduce Waste</span>.
          </h3>
          <span className="text-lg leading-6">
            At ClearOff, we understand the challenge of decluttering your life
            and finding new homes for your Used items. That is why we created a
            platform that makes buying and selling used goods quick, convenient,
            and hassle-free.!
          </span>
          <Link to={"/login"}>
            <button
              type="button"
              className="rounded mt-4 bg-clRed text-gray-50 text-md py-4 px-8 font-medium uppercase transition duration-150 ease-in-out"
            >
              Get started
            </button>
          </Link>
        </div>
        <img
          className="lg:w-1/2 hidden lg:block"
          src="/heroImg1.svg"
          alt="hero-image"
        />
      </div>

      {/* About */}
      <div className="p-10 lg:p-14 flex flex-col-reverse justify-between items-center lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 border-b pb-7 border-b-clRed">
            About Us
          </h2>
          <p className="lg:text-lg">
            We are passionate about creating a sustainable and efficient way to
            declutter your space and give used items a second life. Whether you
            are downsizing, making room for new things, or simply clearing out
            clutter, ClearOff offers a solution that benefits you and the
            environment.
          </p>
        </div>
        <img
          className="mb-16 lg:mb-0 lg:size-1/2 hidden lg:block"
          src="/AboutUs.svg"
          alt=""
        />
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
    </>
  );
}