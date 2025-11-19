import React from 'react'
import Restaurantfood from '../assets/restauranfood.jpg'
import greaksalad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemondessert from '../assets/lemon dessert.jpg'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
const Bookingpage = () => {
    const navigate = useNavigate();
  return (
   <div className="w-full font-sans">
        <Navbar/>
         {/* Hero Section */}
         <section className="bg-[#3f5f5a] text-white px-10 py-14 grid md:grid-cols-2 gap-10 items-center">
           <div>
             <h1 className="text-3xl font-bold mb-2 text-yellow-300">Little Lemon</h1>
             <p className="text-lg mb-4">Chicago</p>
             <p className="max-w-md mb-6">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua.
             </p>
             <button  onClick={() => navigate("/reserve-table")}
             className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full">
               Reserve a Table
             </button>
           </div>
           <div className="flex justify-center">
             <img
               src={Restaurantfood}
               alt="Food"
               className="w-100 h-80 object-fit rounded-lg shadow-lg"
             />
           </div>
         </section>
   
         {/* Specials Section */}
         <section className="px-10 py-14">
           <div className="flex justify-between items-center mb-10">
             <h2 className="text-2xl font-bold">This Week Specials!</h2>
             <button className="bg-yellow-300 text-black px-6 py-2 rounded-full font-medium">
               Online Menu
             </button>
           </div>
   
           <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-gray-100 p-4 rounded-lg shadow">
               <img
                 src={greaksalad}
                 alt="Greek salad"
                className="w-full h-48 object-cover rounded-lg mb-4"
               />
               <div className="flex justify-between items-center mb-2">
                 <h3 className="font-bold text-lg">Greek salad</h3>
                 <p className="text-red-500 font-semibold">$12.99</p>
               </div>
               <p className="text-sm mb-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <p className="font-semibold text-sm cursor-pointer">Order a Delivery</p>
             </div>
             <div className="bg-gray-100 p-4 rounded-lg shadow">
               <img
                 src={bruchetta}
                 alt="Bruschetta"
                className="w-full h-48 object-cover rounded-lg mb-4"
               />
               <div className="flex justify-between items-center mb-2">
                 <h3 className="font-bold text-lg">Bruschetta</h3>
                 <p className="text-red-500 font-semibold">$5.99</p>
               </div>
               <p className="text-sm mb-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <p className="font-semibold text-sm cursor-pointer">Order a Delivery</p>
             </div>
             <div className="bg-gray-100 p-4 rounded-lg shadow">
               <img
                 src={lemondessert}
                 alt="Lemon Dessert"
                className="w-full h-48 object-cover rounded-lg mb-4"
               />
               <div className="flex justify-between items-center mb-2">
                 <h3 className="font-bold text-lg">Lemon Dessert</h3>
                 <p className="text-red-500 font-semibold">$12.99</p>
               </div>
               <p className="text-sm mb-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <p className="font-semibold text-sm cursor-pointer">Order a Delivery</p>
             </div>
           </div>
         </section>
       </div>
  );
}

export default Bookingpage