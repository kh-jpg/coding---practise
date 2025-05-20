import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
    //import{BrowserRouter as Router ,Routes, Route }from 'react-router-dom'
import './index.css'
//import Home from './component/Home'
import Home from './pages/Home'
import Form from './component/Form'
import LoginForm from'./component/LoginForm'
import App from './component/App'
import Resturant from './component/Resturant'
import SignupForm from './component/SignupForm'
import ChangePasswordForm from './component/ChangePasswordForm'
import Food from './component/Food'
import ResturantList from './component/ResturantList'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
 import Amazon from './component/Amazon'
 import RegistrationForm from './component/RegistrationForm'
 import BookBus from './component/BookBus'
 import About from './component/About'
 import Portfolio from './component/Portfolio'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/*<Home/>
     <Home/>
        <Resturant/>
       <SignupForm/>
       <Form/>
       <Food/>
      <LoginForm/>   
            <Amazon/>
           <App/>
           <About/>
        <BookBus/>
         <Login/>  
       <ResturantList/>
       <Dashboard/> 
         <RegistrationForm/>
   <ChangePasswordForm/>*/}
     
   <Portfolio/>
   

    
  </StrictMode>
)