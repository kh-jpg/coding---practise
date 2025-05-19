 import React from 'react';
 import { FaLocationArrow } from "react-icons/fa6";
 import { FaLocationDot } from "react-icons/fa6";
 import { FaCalendarAlt } from "react-icons/fa";
 import { LuArrowDownUp } from "react-icons/lu";

const BookBus = () => {
  return (


      <div className="bg-opacity-50 w-full h-300 ">

        {/* Logo and Menu */}
       <div className="flex justify-between items-center p-4 bg-white shadow">
          <img src="https://mybusmyseat.com/backind/admin/Settings/1529826725.jpg" alt="Seat Adda" className="h-15 w-auto " />
         
        <div className='ml-auto space-y-1 cursor-pointer pr-2'>
           <div className="w-8 h-1 bg-red-600"></div>
            <div className="w-8 h-1 bg-red-600"></div>
            <div className="w-8 h-1 bg-red-600"></div>
            </div>
            </div>

 


        <div className=" min-h-screen bg-cover bg-center flex flex-col items-center"
    style={{
         backgroundImage:"url('/bus.jpg')",
         backgroundSize:"cover",
         backgroundPosition:"center",
       //  marginTop:"65px",
         justifyContent:"center",
         backgroundRepeat:"no-repeat"
      //   height:"300px",
        // width:"500px"
      //  border:"1px solid white"
         }}
         >

        {/* Title 
        <div className='flex bg-red-800 text-white font-semibold text-sm'></div>
        <div className=' flex items-center px-3 py-2 border-r border-white  '>Book Bus Tickets</div>>*/}
        <h1 className=" flex  gap-1  text-white text-xl font-bold text-center mr-56 ">Book Bus Tickets </h1>
       
        {/*Toggle Buttons */}
       <div className="flex space-y-15 justify-center gap-10 mt-66
        mr-56">
          <button className="w-25 h-12  bg-red-500 text-white py-3 px-6 -mt-55
           rounded-full font-bold ">Buses</button>
          <button className="w-25 h-12 bg-white text-black py-3 px-6  -mt-55 rounded-full font-bold">Rental</button>
        </div>
          

       
        {/* Form */}
        <div className="px-8 py-8 -ml-52 space-x-1 mx-25 -mt-5">
        <div className="mb-0.01 -mt-38">
          <div className='bg-white rounded-md
           shadow-sm flex items-center px-5 py-4'>
          <span className='text-red-500 mr-8'><FaLocationArrow /></span>
         <input type='text'placeholder="Leaving From" className='outline-none w-full'/>
             </div>
             </div>
            <div className='flex justify-end '>
          <div className='bg-red-500 text-white p-1 rounded-full  text-xl px-2 py-1  mx-5 flex items-center justify-end '> <LuArrowDownUp />
           </div>
           </div>

          <div className="mb-4">
          <div className='bg-white rounded-md
           shadow-sm flex items-center px-5 py-4'>
          <span className='text-red-500 mr-4 w-10 h-5 '><FaLocationDot /></span>
            <input type="text" placeholder="Going To" className="outline-none w-full"/>
           
            </div>
          </div>
       
        
          <div className="mb-4">
          <div className='bg-white rounded-md shadow-sm flex items-center px-5 py-4'>
          <span className='text-red-500 text-xl mr-8'><FaCalendarAlt />  </span>
            <input type='text'placeholder='Date of Journey'
            className=' outline-none -mt-7 '/>

                <input type='text'placeholder='17/05/2025'
            className=' text-black-900 outline-none mt-5  -ml-45  font-bold '/>
             
          </div>
          </div>
        

          <button className=" bg-red-500 text-white rounded-2xl px-6 py-4 text-xl w-full">Search</button>
        </div>
      </div>
      </div>
   
   
  );
};

export default BookBus;