import React  from 'react';
//import axios from 'axios';
//import Navbar from './Navbar';
//import { useNavigate } from 'react-router-dom';


function RegistrationForm(){
/*const navigate = useNavigate();

 const [formData,setFormdata]=useState({
        FirstName:'',
        LastName:'',
         Email:'',
         Password:''
    });*/
    
  return(
    <div className='min-h-screen flex items-center justify-center bg-white-100'>
    <div className=' w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
      <h1 className='text-2xl font-bold text-green-600  mb-4'>Registration Form</h1>
<form className="flex flex-col gap-2">
  <div classNameName="mb-5">
    <label for="First Name:" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name:</label>
    <input type="First Name:" id="First Name:" className="shadow-xs bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>
  <div>
    <label for="Last Name:" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name:</label>
    <input type="Last Name:" id="Last Name:" className="shadow-xs bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>
  <div>
    <label for="Email:" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
    <input type="Email:" id="Email:" className="shadow-xs bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>

  <div>
    <label for="password:" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
    <input type="password:" id="password:" className="shadow-xs bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>

  <div>
    <label for=" Re-type password:" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-type password:</label>
    <input type="Re-type password:" id=" Re-type password:" className="shadow-xs bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>

  <div>
    <label for=" Contact:" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact:</label>
    <input type="Contact:" id=" Contact:" className="shadow-xs bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>
  
  <div className='mb-1.5'> 
    <label for=" Gender:" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender:</label>
   <select id="Gender"
           name="Gender"
           required
           className="shadow-xs bg-white-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
  >
    <option value="">Select</option>
     <option value="male">Male</option>
     <option value="female">Female</option>
     <option value="Other">Other</option>
   </select>
  

   
  </div>

 
  <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
</form>
</div>
</div>
    )
}


export default RegistrationForm