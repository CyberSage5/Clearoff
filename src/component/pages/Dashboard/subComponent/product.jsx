/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react'

const products = [
  { id: 1, name: 'Nike Air MX Super 2500 - Red', price: 449, oldPrice: 699, image: '/pr1.jpg', category: 'Shoes', rating: 4.5 },
  { id: 2, name: 'Apple iPhone 13 - Black', price: 899, oldPrice: 1099, image: '/pr2.jpg', category: 'Electronics', rating: 4.8 },
  { id: 3, name: 'Samsung Galaxy S21 - White', price: 799, oldPrice: 999, image: '/pr3.jpg', category: 'Electronics', rating: 4.7 },
  { id: 4, name: 'Sony WH-1000XM4 Headphones', price: 299, oldPrice: 349, image: '/pr4.jpg', category: 'Electronics', rating: 4.6 },
  { id: 5, name: 'Levi\'s 501 Original Jeans', price: 59, oldPrice: 89, image: '/pr5.jpg', category: 'Clothing', rating: 4.2 },
  { id: 6, name: 'Ray-Ban Aviator Sunglasses', price: 149, oldPrice: 199, image: '/pr6.jpg', category: 'Accessories', rating: 4.4 },
  { id: 7, name: 'Fitbit Charge 5', price: 129, oldPrice: 179, image: '/pr7.jpg', category: 'Fitness', rating: 4.3 },
  { id: 8, name: 'Amazon Echo Dot (4th Gen)', price: 49, oldPrice: 79, image: '/pr8.jpg', category: 'Smart Home', rating: 4.5 },
  { id: 9, name: 'KitchenAid Stand Mixer', price: 399, oldPrice: 499, image: '/pr9.jpg', category: 'Home Appliances', rating: 4.8 },
  { id: 10, name: 'North Face Venture 2 Jacket', price: 99, oldPrice: 129, image: '/pr10.jpg', category: 'Clothing', rating: 4.6 },
];

function ProductCard({ product }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} aria-hidden="true" className={`h-5 w-5 ${i <= rating ? 'text-yellow-300' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-[#fdf5f3] shadow-md group">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover w-full" src={product.image} alt={`${product.name} image`} />
      </a>
      <div className="mt-4 px-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900"><span className="">N</span> {product.price}</span>
            <span className="text-sm text-slate-900 line-through">N {product.oldPrice}</span>
          </p>
          <div className="flex items-center">
            {renderStars(Math.round(product.rating))}
            <span className="ml-2 text-sm font-semibold text-gray-700">{product.rating}</span>
          </div>
        </div>
        <div className='flex flex-row absolute top-[59%] transition-all opacity-0 duration-300 ease-in-out transform group-hover:opacity-100 group-hover:-translate-y-2'>
          <span className="bg-clRed flex justify-center rounded-lg items-center w-10 h-10 shadow-sm mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
          <span className="bg-clRed flex justify-center rounded-lg items-center w-10 h-10 shadow-sm">
            <svg className="w-7 h-7 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
