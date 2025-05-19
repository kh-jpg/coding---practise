import React from 'react'
import{BrowserRouter as Router ,Routes, Route }from 'react-router-dom'
import { Link } from 'react-router-dom';
 import Navbar from './Navbar';
  //import Home from './Home'
  import Home from '../pages/Home'
  import Dashboard from './Dashboard'
  import Profile from './Profile'
  import Login from './Login'
  import SignupForm from './SignupForm'
  import ProtectedRoutes from './ProtectedRoutes'
 import  OrderList  from '../pages/OrderList'
import  CreateOrder  from '../pages/CreateOrder'
 import EditOrder from '../pages/EditOrder'

   /*  import Product from './Product'
     import Productlist from './Productlist'
    import Form from './Form'
    import  LearnHook from './LearnHook'*/
function App(){
  /*  const ProductList=[
    {id:1,name:'HP Laptop',sellingPrice:'83993' ,cateogry:'Window Machine',description:'Best laptop of this Cateogry , which runs very fast'},
    {id:2,name:'Lenovo Laptop',sellingPrice:'45666' ,cateogry:'Window Machine',description:'Best laptop of this Cateogry , which runs very fast'},
     {id:3,name:'Asus Laptop',sellingPrice:'6665' ,cateogry:'Window Machine',description:'Best laptop of this Cateogry , which runs very fast'},
    {id:4,name:'Mac1 Laptop',sellingPrice:'8777' ,cateogry:'IOS Machine',description:'Best laptop of this Cateogry , which runs very fast'},
    {id:5,name:'Macbook Air Laptop',sellingPrice:'8777' ,cateogry:'IOS Machine',description:'Best laptop of this Cateogry , which runs very fast'}
      ]*/
    return(
        <>
           <Router>    
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<SignupForm/>}/>
        <Route element={<ProtectedRoutes/>}>
           <Route path="/dashboard"  element={<Dashboard/>}/>
                <Route path="/profile"  element={<Profile/>}/>
                  <Route path="/orderlist"  element={<OrderList/>}/>
                  <Route path="/createorder"  element={<CreateOrder/>}/>
                  <Route path="/editorder/:id"  element={<EditOrder/>}/>
                   
        </Route>
      </Routes>
      </Router>





          {/*<Product name="Mac Book" sellingPrice="10000" cateogry="Smart Phone" description="Best Mobile Phone Of This Cteogry, Smart Phone with Speed and network capability"/>*/}
         {/* <Productlist pageHeader='Smart Phone' products={ProductList}/>*/}
       {/* <Form/>*/}
       {/*  <LearnHook/>*/}
     
     
        </>
    )
}
export default App