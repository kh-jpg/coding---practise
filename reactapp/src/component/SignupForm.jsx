import React,{useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
function SignupForm(){
   
    const [formData,setFormdata]=useState({
        name:'',
        email:'',
        mobile:''
    });


    const[responseMessage,setResponseMessage]=useState('');
    
    const handleChange=(e)=>{
        setFormdata({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
   
    const handleSubmit=async(e)=>{
      e.preventDefault();// suspend default behavior of submit form which is page refresh
       
      try{
            // logic to hit api and send formdata
            // axios helps to hit api npm install axios
            const API_ENDPOINT='http://localhost:5000/api/v1/signup';
            const response= await axios.post(API_ENDPOINT,formData);
            console.log(formData);
            if(response.status=='201'){
                //now blank input fields
                setFormdata({
                    name:'',
                    email:'',
                    mobile:''
                });
                setResponseMessage('Signup Successfully ');
                console.log(response.data);
            }else{
               setResponseMessage('Server Error,Try Again');
            }
        }catch(err){
         console.log('Error while signup',err);
      }
    }


    return(
        <>
                         <div className="headersection">
                <div className="logosection">
                    <p><span className="fa fa-star"></span>Food-Cart</p>
                </div>
                <Navbar/>
                <div className="loginsection">
                <div className="loginbox">
                <p className="login">SignUp</p>
                {
                    responseMessage &&(
                        <p style={{color:'red'}}>{responseMessage}</p>
                    )
                }
                <div className="childdiv">
                    <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"  
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name" 
                    required 
                    className="inputbox"/>
                    <br/><br/>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter Your Email" 
                    required 
                    className="inputbox"/>
                    <br/><br/>
                    <input 
                    type="number" 
                    id="mobile" 
                    name="mobile" 
                    value={formData.mobile}
                    onChange={handleChange} 
                    placeholder="Enter Your Mobile Number" 
                    required 
                    className="inputbox"/>
                    <br/><br/>
                    <input type="submit" name="signupbtn" value="SignIn" className="btn"/>
                </form>
                    <div className="linksdiv">
                    <p className="linkspara"><a href="#" className="links">forgot password ?</a></p>
                    <p className="linkspara"><a href="" className="links">create new account</a></p>
                    </div>


                    <p className="socialiconbox">
                        <span className="fa fa-facebook socialicon"></span>
                        <span className="fa fa-twitter socialicon"></span>
                        <span className="fa fa-instagram socialicon"></span>
                        <span className="fa fa-youtube-play socialicon"></span>
                    </p>
                    </div>
                </div>
                </div>
            </div> 

















      {/*  <div className="container">
        {
            responseMessage &&(
                <p style={{color:'red'}}>{responseMessage}</p>
            )
        }
        <form  onSubmit={handleSubmit}className="max-w-sm mx-auto">
            <h1><bold>SignUp</bold></h1>
        <div className=" text">
            <input class="inp1"
               type="text" 
            id="name" 
            name="name" 
            placeholder='Enter name'
            value={formData.name}
            onChange={handleChange}/>

            <input class="inp1"
            type="text" 
            id="email" 
            name="email" 
            placeholder='Enter email'
            value={formData.email}
            onChange={handleChange}/>

            <input class="inp1"
            type="text" 
            id="mobile" 
            name="mobile" 
            placeholder='Enter mobile number'
            value={formData.mobile}
            onChange={handleChange}/>
            <button  type="submit"   name="signupbtn" >Create Account</button>
          
            <p>Already have an account ?<span>Signin</span></p>

            
            
      {/*  <label htmlFor="email" className="block mb-2 text-lg text-center font-medium text-gray-900 dark:text-white">SignUp</label>
        </div>
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>

            <input class="inp1" 
             
           type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
        </div>
        <div className="mb-5">
            <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <br></br>
            <br></br>

            <input class="inp1"  type="email" 
            id="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
        </div>
        <div className="mb-5">
            <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile</label>
            <br></br>
            <br></br>
            <input class="inp1"  type="number" 
            id="mobile" 
            name="mobile" 
            value={formData.mobile}
            onChange={handleChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Mobile" required />
        </div>
        <div className="flex justify-end">
        <button type="submit" 
        name="signupbtn"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>*/}

      {/* </div>
        </form>
        </div >*/}
        </>
    )

    
}
export default SignupForm