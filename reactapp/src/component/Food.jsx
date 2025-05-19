import React, { useState } from "react";

const foodItems = [
  { id: 1, name: "Veg Burger", type: "Veg", price: 120, restaurant: "Burger King",image:"https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/20383/PK1021246.jpg?date=Sun%20Apr%2006%202025%2011:14:14%20GMT+0530%20(India%20Standard%20Time)"},
  { id: 2, name: "Chicken Pizza", type: "Non-Veg", price: 300, restaurant: "Domino's",image:"https://tse4.mm.bing.net/th?id=OIP.gmjyXhYBbbVenv6pg0uJ5gHaE8&pid=Api&P=0&h=220" },
  { id: 3, name: "Paneer Wrap", type: "Veg", price: 180, restaurant: "KFC",image:"https://tse4.mm.bing.net/th?id=OIP.dwYoC-925p8-cneyl83tMgHaEM&pid=Api&P=0&h=220" },
  { id: 4, name: "Chicken Roll", type: "Non-Veg", price: 220, restaurant: "Pizza Hut",image:"https://tse2.mm.bing.net/th?id=OIP.jqEaJpyaE8GOb-0ZpJhNCwHaHa&pid=Api&P=0&h=220" },
  {id:5,name:"Fish Curry",type:"Non-veg",price:250,restaurant:"The Fish Bowl",image:"https://tse4.mm.bing.net/th?id=OIP.UGCmMswkk7Fy65Mrjrpi_AHaEK&pid=Api&P=0&h=220"},
  {id:6,name:"Sambar Idli",type:"veg",price:60,restaurant:"KFC",image:"https://static.vecteezy.com/system/resources/previews/000/808/118/non_2x/sambar-idli-south-indian-dish-photo.jpg"},
  {id:7,name:"Paneer Dosa",type:"veg",price:120,restaurant:"The Fish Bowl",image:"https://tse1.mm.bing.net/th?id=OIP.5yMt_DfBjq1HEyLeTFMA3wHaLH&pid=Api&P=0&h=220"},
  {id:8,name:" Hyderabadi Veg Biryani",type:"veg",price:200,restaurant:"Burger King",image:"https://2.bp.blogspot.com/-bGLGRHhcp6c/Uzxc_8Ci5AI/AAAAAAAAd_A/U6w4dypt78s/s1600/Veg+dum+biryani.jpeg"},
   {id:9,name:" Chicken Biryani",type:"Non-veg",price:300,restaurant:"The Fish Bowl",image:"https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"},
   {id:10,name:" Manchurian",type:"veg",price:150,restaurant:"Burger King",image:"https://tse1.mm.bing.net/th?id=OIP.-imDljFaImYUyiC8eVjU1wHaEK&pid=Api&P=0&h=220"},
   {id:11,name:"Noodles",type:"veg",price:50,restaurant:"Burger King",image:"https://tse4.mm.bing.net/th?id=OIP.t1mjOy18QJVeqmwgjnTdCgHaHa&pid=Api&P=0&h=220"},
   {id:12,name:"Indian Food ",type:"veg",price:250,restaurant:"Pizza Hut",image:"https://www.pigeontravels.com/wp-content/uploads/2018/11/food-of-india.jpg"},
   {id:13,name:"Pav-Bhaji",type:"veg",price:200,restaurant:"Pizza Hut",image:"https://img-global.cpcdn.com/recipes/58290099f9d4f97e/1502x1064cq70/pav-bhaji-recipe-recipe-main-photo.jpg"},
   {id:14,name:"Veg-momos",type:"veg",price:150,restaurant:"Burger King",image:"https://static.toiimg.com/photo/75146877.cms"},
   {id:15,name:"Tikki-Chat",type:"veg",price:150,restaurant:"The Fish Bowl",image:"https://tse1.mm.bing.net/th?id=OIP.4w6Zk8nxK64c91kO1zVmBAHaEK&pid=Api&P=0&h=220"},
   {id:16,name:"Chicken",type:"Non-veg",price:220,restaurant:"KFC", image:"https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/4717/1-BZ133409.jpg"}
  
];



                                                     
const FoodFilter = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  const filteredFood = foodItems.filter((item) => {
    return (
      (selectedType === "" || item.type === selectedType) &&
      (selectedPrice === "" ||
        (selectedPrice === "low" && item.price < 200) ||
        (selectedPrice === "high" && item.price >= 200)) &&
      (selectedRestaurant === "" || item.restaurant === selectedRestaurant)
    );
  });

  return (
    <div className=" text-xl p-6">
      <h1 className="text-3xl font-bold text-center my-6">Food Order Page</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Veg / Non-Veg Dropdown */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        {/* Price Dropdown */}
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Prices</option>
          <option value="low">Below ₹200</option>
          <option value="high">₹200 & above</option>
        </select>

        {/* Restaurant Dropdown */}
        <select
          value={selectedRestaurant}
          onChange={(e) => setSelectedRestaurant(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Restaurants</option>
          <option value="Burger King">Burger King</option>
          <option value="Domino's">Domino's</option>
          <option value="KFC">KFC</option>
          <option value="Pizza Hut">Pizza Hut</option>
          <option value="The Fish Bowl">The Fish Bowl</option>
        </select>
      </div>

      {/* Food Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredFood.map((item) => (
          <div key={item.id} className="shadow-lg rounded-xl  overflow-hidden bg-white flex">
            <img src={item.image} alt={"item.name"}className="w-35 h-32 object-cover rounded-l-md"/>
           
              <div className="flex flex-col justify-between ">
            <h3 className="text-xl font-semibold">{item.name}</h3>

            <div className="flex items-center space-x-2 mt-1 text-sm">
            <span>Type:{item.type}</span>
            <span>Price:₹{item.price}</span>
            <span>Restaurant:{item.restaurant}</span>
            </div>
            <button className="mt-2 bg-orange-500 text-white px-2 py-1 rounded">
              Add to Cart 
            </button>
      
          </div>
          </div>
              
        ))}
        
      

        {filteredFood.length === 0 && <p>No food items match your filters.</p>}
      </div>
    </div>
  );
};

export default FoodFilter;