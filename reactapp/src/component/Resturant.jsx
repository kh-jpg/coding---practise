import React from 'react'
import '../App.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { MdDescription, MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";


const foodData=[
  {
    id:1,
    name:"Food Name 1",
    rating:"⭐⭐⭐⭐⭐",
    image:"https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/3.png?raw=true",
    description:"Delicious food item",
    Price:"$10.99"
    
},
  {
    id:2,
    name:"Food Name 2",
     rating:"⭐⭐⭐⭐⭐",
    image:'https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/4.png?raw=true',
    description:"Tasty meal",
     Price:"$12.99"
   
  },
   {
    id:3,
    name:"Food Name 3",
    rating:"⭐⭐⭐⭐⭐",
   image:"https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/5.png?raw=true",
    description:"Yummy dish",
     Price:"$14.99"
    
  }
];
 const services=[
  {name:"Online Booking",icon:FaMobileScreen},
  {name:"Fast Food",icon:MdOutlineFastfood },
  {name:"Healthy Food",icon:MdFoodBank},
  {name:"Delivery",icon:CiDeliveryTruck}
 ];

const Resturant=()=>{
    return(
        <>
        <div className='containers flex justify-between items-center'>
          <div>
            <p className='text-lg font-bold'>Yummy</p>
          </div>
          <div className=' flex justify-center items-center gap-6'>
            <ul className='gap-10 hidden sm:flex'>
              <li className="hover:border 
               border-primary uppercase">HOME</li>

                <li className="hover:border
               border-primary uppercase">ABOUT</li>

                <li className="hover:border 
               border-primary uppercase">MENU</li>
  
           <li className="hover:border 
               border-primary uppercase">SPECIALS</li>
              <li className="hover:border 
               border-primary uppercase">EVENTS</li>

                        <li className="hover:border 
               border-primary uppercase">CONTACT</li>
                        <li className="hover:border 
               border-primary uppercase">GALLERY</li>
 </ul> 
           <div className='flex gap-4 items-center'>
              <img src="https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/profile.png?raw=true" className='w-10 rounded-full '></img>
             
              <IoIosArrowDown />
               </div>
           
          </div>
        </div>


         <div className='containers1 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
        <div className='flex flex-col justify-center gap-8  text-center md:text-left pt-24 md:p-0 pb-10'>
         <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h1 className='text-5xl font-semibold'>Delicious
            Food Is <br></br> Waiting For You</h1>
            <p className='text-3xl font-semibold'>
              Lorem  ipsum  dolor, sit  ammet  consectetur <br></br> adipisicing  Dicta  assumenda  qui ipsam  id <br></br>officiis
               modi  cumque  minus  dolores  placeat<br></br>  explicabo.
            </p>
            <div className='flex gap-2 items-center md:justify-start justify-center'>
              <button className='primary-btn'>Food Menu</button>
               <button className='secondary-btn'>Book Table</button>
            </div>
         </div>
       <div className='flex flex-col justify-center'>
        <img src="https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/1.png?raw=true" className='animate-spin-slow img-shadow w-[400px] mx-auto '></img>
       </div>
        </div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       
        <div className='text-center'>
          <h1 className='text-5xl font-semibold,align-items:center'>Top List</h1>
          <br></br>
         <p className='text-6xl font-semibold,align-items:center'>Our top list</p>
        </div>
            <br></br>
            <br></br>
        <div className=' food grid grid-cols-1 md:grid-cols-3 gap-4 '>
           {/*    <div className='foodbox' >
                <img src="https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/3.png?raw=true"></img>
               <div className='foodbox_description'>
                 <p>⭐⭐⭐⭐⭐ </p>
                <p>Food Name 1</p>
                <p> Lorem  ipsum  dolor, sit  ammet <br></br> consectetur  adipisicing  elit</p>
                <p>$10.99</p>
               </div>
               </div>
              
              
               <div className='foodbox'>
                <img src='https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/4.png?raw=true'></img>
                <div className='foodbox_description'>
                <p>⭐⭐⭐⭐⭐ </p>
                 <p>Food Name 2</p>
                  <p> Lorem  ipsum  dolor, sit  ammet <br></br> consectetur  adipisicing  elit</p>
                <p>$10.99</p>
                </div>  
               </div>

               <div className='foodbox'>
                <img src="https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/5.png?raw=true"></img>
                 <div className='foodbox_description'>
                <p>⭐⭐⭐⭐⭐ </p>
                <p>Food Name 3</p>
                 <p> Lorem  ipsum  dolor, sit  ammet <br></br> consectetur  adipisicing  elit</p>
                <p>$10.99</p>
               </div>
               </div>*/}
               {foodData.map((food) =>(
                      <div key={food.id}className='foodbox w-full flex flex-col items-center mb-5'>
                        <img src={food.image} alt={food.name}/>
                        <h2 className='text-3xl font-semibold,align-items:center'>{food.name}</h2>
                          <p>{food.rating}</p>
                        <p>{food.description}</p>
                        <p>{food.Price}</p>
                       
                   </div>
                        ))}
    
                  </div>



        <br></br>
         <br></br>
          
        <div className=' food grid grid-cols-1 md:grid-cols-2 items-center h-screen px-10 gap-x-1 -ml-2 '>
          <div>
          <img src="https://github.com/dilshad-ahmed/foodeat/blob/main/src/assets/2.png?raw=true" alt='French Fries' className='w-full max-w-2xl mx-auto block'></img>
        </div>

           <div className=" banner flex flex-col justify-center text-left px-6 ">
            <h1 className="text-4xl font-semibold">Food Is Always <br></br>Good</h1>
            <p className='mt-4 text-lg'>
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Temporibus laboriosam <br></br>vitae accusamus assumenda, nobis<br></br> perferendis
              ducimus! Itaque similique,<br></br> recusandae nulla 
            </p>
          </div>
          </div>
          <br></br>
          <br></br>
          
          
          <div className='text-center'>
            <h1 className="text-4xl font-semibold,align-items:center">Our Services</h1>
          </div>
         
          <br></br>
        
    
       {/*   <div className=' flex justify-between gap-12 mt-12'>
          
            <div className='flex justify-center items-center gap-3'>
               <FaMobileScreen className='text-2xl'/> 
            <p className='text-xl font-semibold'>Online Booking</p>
            </div>

            <div  className='flex justify-center items-center gap-3'> 
               <MdOutlineFastfood  className='text-2xl'/> 
            <p className='text-xl font-semibold'>Fast Food</p>
           </div>
            <div className=' justify-center items-center gap-3'> 
              <MdFoodBank  className='text-2xl'/>
               <p className='text-xl font-semibold'>Healthy Food</p>
            </div>

           <div className='flex justify-center items-center gap-3'>
               <CiDeliveryTruck className='text-2xl' />
               <p className='text-xl font-semibold'>Delivery</p>
            </div>

          </div>*/}
          <div className='flex flex-wrap justify-center gap-6'>
            {services.map((service,index)=>{
              const IconComponent =service.icon;
              return (
              <div key={index} className='flex flex-col items-center text-center'>
               <IconComponent className="text-2xl"/>
                <p className='mt-2 text-lg'>{service.name}</p>
                </div>
              );
})}
          </div>
</>
    )

  }
  

export default Resturant