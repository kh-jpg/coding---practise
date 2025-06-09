//import React,{useRef} from "react";
import React, { useRef, useEffect, useState } from 'react';

import '../App.css'
//import { } from "framer-motion";
//import { FaLocationDot, FaSearch, FaShospanspaningCart, FaBars } from 'react-icons/fa6';
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
//import { ChevronLeft, ChevronRight } from 'lucide-react';


const ProductCard = ({  items, linkText}) => {
  return (

      <div className="bg-white p-4 shadow-md border rounded-lg ">
    {/* <h2 className="text-xl font-bold mb-4 text-gray-900 text-center ">{title}</h2>*/}
      {/*  </div>
      ) */}
  
      <div className="grid grid-cols-2 gap-4 mb-3 ">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={item.img} alt={item.label} className="w-[120px] h-[100px] object-contain mb-1 mx-auto" />
            <label className="text-base text-gray-700 leading-tight ">{item.label}</label>
          </div>
        ))}
      </div>
      <a href="" className="text-blue-600 text-sm hover:underline block text-center mt-[2px]">{linkText}</a>
    </div>
);
};

const ProductCard1 = ({  items,title}) => {
  return (
      <div className="bg-white p-6 shadow-md border rounded-md hover:shadow-lg transition-all duration-300 w-[330px] m-auto  ">
          <h2 className='text-center text-lg font-bold text-gray-800 '>{title}</h2>
      <div className="grid grid-cols-2 gap-4 mb-3 ">
    
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
          
            <img src={item.img} className="w-[160px] h-[120px] object-contain mb-1 mx-auto" />
          </div>
        ))}
      </div>
     
    </div>
);
};

 const section=[
  {
    title:"Up to 75% off | Get casual ready from Small Businesses",
    linkText:"See more",
    items:[
    "https://m.media-amazon.com/images/I/510BG1QXhDL._AC_SY170_.jpg",
    " https://m.media-amazon.com/images/I/51vaKJu6iOL._AC_SY340_.jpg",
     " https://m.media-amazon.com/images/I/6105IZJUKcL._AC_SY340_.jpg",
    "https://m.media-amazon.com/images/I/51nIHi7R08L._AC_SY340_.jpg "
    ],
  },
  {
    title:"Best Sellers in Clothing & Accessories",
    linkText:"Explore more",
    items:[
       "https://m.media-amazon.com/images/I/71mX4WATh-L._AC_SY340_.jpg ",
      " https://m.media-amazon.com/images/I/81TRdxk1wnL._AC_SY340_.jpg",
      "https://m.media-amazon.com/images/I/71qJNrZhd1L._AC_SY340_.jpg ",
    "https://m.media-amazon.com/images/I/51suEsggRLL._AC_SY340_.jpg "
    ],
  },
  {
    title:"Starting ₹229 | Unique home essentials from nearby stores",
    linkText:"View all",
    items:[
      "https://m.media-amazon.com/images/I/A17z9vJ-TFL._AC_SY110_.jpg ",
         "https://m.media-amazon.com/images/I/51Y3i8cY1UL._AC_SY340_.jpg ",
           " https://m.media-amazon.com/images/I/71Ie5i+7JHL._AC_SY340_.jpg",
               "https://m.media-amazon.com/images/I/418SrGaYN1L._AC_SY340_.jpg "
    ],
  },
  {
    title:"Home Shopping Spree | Min. 40% off | Home & kitchen…",
    linkText:"See all offers",
    items:[
     "https://m.media-amazon.com/images/I/71ALUhHMH1L._AC_SY340_.jpg ",
        "https://m.media-amazon.com/images/I/418RPVisJeL._AC_SY340_.jpg",
       "https://m.media-amazon.com/images/I/71e+WnY7rML._AC_SY340_.jpg ",
      "https://m.media-amazon.com/images/I/41TXlDE74uL._AC_SY340_.jpg "
    ]
  },

]


  const Navbar = () =>{
       

    const productScrollRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const cardRef = useRef(null);
  
    // Measure width of one card
    useEffect(() => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 16); // +16px for gap (gap-4)
      }
    }, []);
  
    const scrollProducts = (direction) => {
      const scrollAmount = cardWidth * 5; // scroll 5 cards at a time
      if (productScrollRef.current) {
        productScrollRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
   
       const products=[
        {id:1,img:"https://m.media-amazon.com/images/I/611lyTt-JfL._AC_SY400_.jpg",name:"p-1"},
        {id:2,img:"https://m.media-amazon.com/images/I/51PH6t3t47L._AC_SY400_.jpg",name:"p-2"},  
        {id:3,img:"https://m.media-amazon.com/images/I/716GH-AC7IL._SX679_.jpg",name:"p-3"},

        {id:4,img:"https://m.media-amazon.com/images/I/51EQIZhk-6L._AC_SY400_.jpg",name:"p-4"},
        {id:5,img:"https://m.media-amazon.com/images/I/512H4h7FPgL._AC_SY400_.jpg",name:"p-5"},
        {id:6,img:"https://m.media-amazon.com/images/I/616o-N0f7tL._AC_SY400_.jpg",name:"p-6"},
        {id:7,img:"https://m.media-amazon.com/images/I/61fRI6Tp3zL._AC_SY400_.jpg",name:"p-7"},

        {id:8,img:"https://m.media-amazon.com/images/I/61-6yDuvBxL._AC_SY400_.jpg",name:"p-8"},
        {id:9,img:"https://m.media-amazon.com/images/I/61VwuY8hiyL._AC_SY400_.jpg",name:"p-9"},
        {id:10,img:"https://m.media-amazon.com/images/I/612kNIJYPKL._AC_SY400_.jpg",name:"p-10"},
        {id:11,img:"https://m.media-amazon.com/images/I/81zSKCAWjbL._AC_SY400_.jpg",name:"p-11"},
        {id:12,img:"https://m.media-amazon.com/images/I/51EkbomEauL._AC_SY400_.jpg",name:"p-12"}, 

       ]
       
    
    const productScrollRef1 = useRef(null);
    const [cardWidth1, setCardWidth1] = useState(0);
    const cardRef1= useRef(null);
  
    // Measure width of one card
    useEffect(() => {
      if (cardRef1.current) {
        setCardWidth1(cardRef1.current.offsetWidth + 16); // +16px for gap (gap-4)
      }
    }, []);
  
    const scrollProducts1 = (direction) => {
      const scrollAmount1 = cardWidth1 * 5; // scroll 5 cards at a time
      if (productScrollRef1.current) {
        productScrollRef1.current.scrollBy({
          left: direction === 'left' ? -scrollAmount1 : scrollAmount1,
          behavior: 'smooth',
        });
      }
    }

       const products1=[
        {id:11,img:" https://m.media-amazon.com/images/I/712n7zx4kNL._AC_SY200_.jpg",name:"p-11"},

        {id:12,img:" https://m.media-amazon.com/images/I/71S7hFzzFxL._AC_SY400_.jpg",name:"p-12"},

        {id:13,img:"https://m.media-amazon.com/images/I/713zDjI9uBL._AC_SY400_.jpg",name:"p-13"},

        {id:14,img:"https://m.media-amazon.com/images/I/312UxAInThL._AC_SY400_.jpg",name:"p-14"},

        {id:15,img:"https://m.media-amazon.com/images/I/71FdJZH4pNL._AC_SY400_.jpg",name:"p-15"},

        {id:16,img:"https://m.media-amazon.com/images/I/51b4Zkj5G3L._AC_SY400_.jpg",name:"p-16"},
        {id:17,img:"https://m.media-amazon.com/images/I/612KoiaQmBL._AC_SY400_.jpg",name:"p-17"},
        {id:18,img:"https://m.media-amazon.com/images/I/71UQa8+WORL._AC_SY400_.jpg",name:"p-18"},
        {id:19,img:"https://m.media-amazon.com/images/I/51+BQcYW2XL._AC_SY400_.jpg",name:"p-19"},
        {id:20,img:"https://m.media-amazon.com/images/I/71-3sNoyF6L._AC_SY200_.jpg",name:"p-20"}
       ]
     
  
       const productScrollRef2 = useRef(null);
       const [cardWidth2, setCardWidth2] = useState(0);
       const cardRef2= useRef(null);
     
       // Measure width of one card
       useEffect(() => {
         if (cardRef2.current) {
           setCardWidth2(cardRef2.current.offsetWidth + 16); // +16px for gap (gap-4)
         }
       }, []);
     
       const scrollProducts2 = (direction) => {
         const scrollAmount2 = cardWidth2 * 5; // scroll 5 cards at a time
         if (productScrollRef2.current) {
           productScrollRef2.current.scrollBy({
             left: direction === 'left' ? -scrollAmount2 : scrollAmount2,
             behavior: 'smooth',
           });
         }
       }
       const products2=[
        {id:111,img:"https://m.media-amazon.com/images/I/51u2MqPaQwL._AC_SY400_.jpg ",name:"p-111"},

        {id:112,img:"https://m.media-amazon.com/images/I/61uF50OZzuL._AC_SY400_.jpg",name:"p-112"},

        {id:113,img:"https://m.media-amazon.com/images/I/61mJSikurML._AC_SY400_.jpg",name:"p-113"},

        {id:114,img:"https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_SY400_.jpg",name:"p-114"},

        {id:115,img:"https://m.media-amazon.com/images/I/61NcJuDzfqL._AC_SY400_.jpg ",name:"p-115"},

        {id:116,img:"https://m.media-amazon.com/images/I/41SKH83LjvL._AC_SY400_.jpg ",name:"p-116"},
        {id:117,img:"https://m.media-amazon.com/images/I/5104paTwzML._AC_SY400_.jpg ",name:"p-117"},
        {id:118,img:" https://m.media-amazon.com/images/I/51LlDPYPIfL._AC_SY400_.jpg",name:"p-118"},
        {id:119,img:"https://m.media-amazon.com/images/I/51dAV1h36zL._AC_SY400_.jpg",name:"p-119"},
        {id:120,img:"https://m.media-amazon.com/images/I/71oXzCK43NL._AC_SY400_.jpg ",name:"p-120"},
        {id:121,img:" https://m.media-amazon.com/images/I/619PNYrxNAL._AC_SY400_.jpg",name:"p-121"},
        {id:122,img:"https://m.media-amazon.com/images/I/61H2th1dUdL._AC_SY400_.jpg",name:"p-122"},
        {id:23,img:" https://m.media-amazon.com/images/I/316sdRiF3ML._AC_SY400_.jpg",name:"p-23"},
        {id:24,img:"https://m.media-amazon.com/images/I/81KNgp5Oc+L._AC_SY400_.jpg",name:"p-24"},

       ]
   
       const productScrollRef3 = useRef(null);
       const [cardWidth3, setCardWidth3] = useState(0);
       const cardRef3= useRef(null);
     
       // Measure width of one card
       useEffect(() => {
         if (cardRef3.current) {
           setCardWidth3(cardRef3.current.offsetWidth + 16); // +16px for gap (gap-4)
         }
       }, []);
     
       const scrollProducts3 = (direction) => {
         const scrollAmount3 = cardWidth3* 5; // scroll 5 cards at a time
         if (productScrollRef3.current) {
           productScrollRef3.current.scrollBy({
             left: direction === 'left' ? -scrollAmount3: scrollAmount3,
             behavior: 'smooth',
           });
         }
       }
       const products3=[
        {id:111,img:"https://m.media-amazon.com/images/I/81R00576YtL._AC_SY400_.jpg ",name:"p-111"},

        {id:112,img:"https://m.media-amazon.com/images/I/61ccEkw+gTL._AC_SY400_.jpg",name:"p-112"},

        {id:113,img:"https://m.media-amazon.com/images/I/71wcI0cjC9L._AC_SY400_.jpg",name:"p-113"},

        {id:114,img:"https://m.media-amazon.com/images/I/51RF-7pCOcL._AC_SY400_.jpg ",name:"p-114"},

        {id:115,img:" https://m.media-amazon.com/images/I/41yiGfGqEpS._AC_SY400_.jpg",name:"p-115"},
        {id:116,img:"https://m.media-amazon.com/images/I/616jWRUaH0L._AC_SY400_.jpg ",name:"p-116"},
        {id:117,img:"https://m.media-amazon.com/images/I/61U7yCLqqQL._AC_SY400_.jpg ",name:"p-117"},
        {id:118,img:"https://m.media-amazon.com/images/I/71obeN772XL._AC_SY400_.jpg ",name:"p-118"},
        {id:119,img:"https://m.media-amazon.com/images/I/71obeN772XL._AC_SY400_.jpg ",name:"p-119"},
        {id:120,img:" https://m.media-amazon.com/images/I/61mwHOOonNL._AC_SY400_.jpg",name:"p-120"},
        {id:121,img:" https://m.media-amazon.com/images/I/51TYLpDzgrL._AC_SY400_.jpg",name:"p-121"},
        {id:122,img:" https://m.media-amazon.com/images/I/71Tn2CNho6L._AC_SY400_.jpg",name:"p-122"}
       ]

       const productScrollRef4 = useRef(null);
       const [cardWidth4, setCardWidth4] = useState(0);
       const cardRef4= useRef(null);
     
       // Measure width of one card
       useEffect(() => {
         if (cardRef4.current) {
           setCardWidth4(cardRef4.current.offsetWidth + 16); // +16px for gap (gap-4)
         }
       }, []);
     
       const scrollProducts4 = (direction) => {
         const scrollAmount4 = cardWidth4* 5; // scroll 5 cards at a time
         if (productScrollRef4.current) {
           productScrollRef4.current.scrollBy({
             left: direction === 'left' ? -scrollAmount4: scrollAmount4,
             behavior: 'smooth',
           });
         }
       }
       const products4=[
        {id:1,img:" https://m.media-amazon.com/images/I/91ZVf3kNrcL._AC_SY400_.jpg ",name:"p-1"},
        {id:2,img:" https://m.media-amazon.com/images/I/51+ROKEYviL._AC_SY400_.jpg ",name:"p-2"},
        {id:3,img:" https://m.media-amazon.com/images/I/7186aAI6FFL._AC_SY400_.jpg ",name:"p-3"},
        {id:4,img:"https://m.media-amazon.com/images/I/81F30JDZU9L._AC_SY400_.jpg  ",name:"p-4"},
        {id:5,img:"  https://m.media-amazon.com/images/I/81-zw2gGCGL._AC_SY400_.jpg ",name:"p-5"},
        {id:6,img:" https://m.media-amazon.com/images/I/61o5Q8IIq4L._AC_SY400_.jpg",name:"p-6"},
        {id:7,img:" https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_SY400_.jpg ",name:"p-7"},
        {id:8,img:" https://m.media-amazon.com/images/I/91QLt2Q-+cL._AC_SY400_.jpg ",name:"p-8"},
        {id:9,img:"  https://m.media-amazon.com/images/I/81+efMYN9wL._AC_SY400_.jpg",name:"p-9"},
        {id:10,img:" https://m.media-amazon.com/images/I/812VfWC0-YL._AC_SY400_.jpg ",name:"p-10"},
        {id:11,img:" https://m.media-amazon.com/images/I/81CgE6pRb0L._AC_SY400_.jpg ",name:"p-11"},
        {id:12,img:"  https://m.media-amazon.com/images/I/71aOvZBV1cL._AC_SY400_.jpg ",name:"p-12"},
        {id:13,img:" https://m.media-amazon.com/images/I/71aOvZBV1cL._AC_SY400_.jpg ",name:"p-13"},
        {id:14,img:" https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_SY400_.jpg ",name:"p-14"},
        {id:15,img:" https://m.media-amazon.com/images/I/81nrTPws8zL._AC_SY400_.jpg ",name:"p-15"},
        {id:16,img:" https://m.media-amazon.com/images/I/81oNV2N4nPL._AC_SY400_.jpg ",name:"p-16"},
        {id:17,img:"https://m.media-amazon.com/images/I/812W6UKfgVL._AC_SY400_.jpg",name:"p-17"},
        {id:18,img:"https://m.media-amazon.com/images/I/61Wxab6R32L._AC_SY400_.jpg",name:"p-18"},
        {id:19,img:"https://m.media-amazon.com/images/I/81NSnrzuAeL._AC_SY400_.jpg" ,name:"p-19"},
        {id:20,img:" https://m.media-amazon.com/images/I/51UBxM+7QzL._AC_SY400_.jpg" ,name:"p-20"}, 
        {id:21,img:"https://m.media-amazon.com/images/I/81qsstEtrgL._AC_SY400_.jpg", name:"p-21"},
        {id:22,img:"https://m.media-amazon.com/images/I/71CI8jKGupL._AC_SY400_.jpg" ,name:"p-22"}, 
        {id:23,img:"https://m.media-amazon.com/images/I/81AbM2vPvPL._AC_SY400_.jpg",name:"p-23"},
        {id:24,img:" https://m.media-amazon.com/images/I/613znXUaEWL._AC_SY400_.jpg",name:"p-24"},
        {id:25,img:"https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_SY400_.jpg",name:"p-25"},
        {id:26,img:"https://m.media-amazon.com/images/I/81Rz9l29NiL._AC_SY400_.jpg" ,name:"p-26"}
         
       ]
       const productScrollRef5= useRef(null);
       const [cardWidth5, setCardWidth5 ] = useState(0);
       const cardRef5= useRef(null);
     
       // Measure width of one card
       useEffect(() => {
         if (cardRef5.current) {
           setCardWidth5(cardRef5.current.offsetWidth + 16); // +16px for gap (gap-4)
         }
       }, []);
     
       const scrollProducts5= (direction) => {
         const scrollAmount5 = cardWidth5* 5; // scroll 5 cards at a time
         if (productScrollRef5.current) {
           productScrollRef5.current.scrollBy({
             left: direction === 'left' ? -scrollAmount5: scrollAmount5,
             behavior: 'smooth',
           });
         }
       }
       const products5=[
        {id:1,img:"https://m.media-amazon.com/images/I/51SxNOrlYWL._AC_SY400_.jpg"},
        {id:2,img:"https://m.media-amazon.com/images/I/710yBz6hfUL._AC_SY400_.jpg"},
        {id:3,img:"https://m.media-amazon.com/images/I/61oSwPvRWLL._AC_SY400_.jpg"},
        {id:4,img:" https://m.media-amazon.com/images/I/71hYbAifNoL._AC_SY400_.jpg"},
        {id:5,img:" https://m.media-amazon.com/images/I/71S4-NjoTDL._AC_SY400_.jpg  ",name:"p-5"},
        {id:6,img:"https://m.media-amazon.com/images/I/61bAqtzJ8VL._AC_SY400_.jpg ",name:"p-6"},
        {id:7,img:" https://m.media-amazon.com/images/I/71SDZVqu3+L._AC_SY400_.jpg ",name:"p-7"},
        {id:8,img:" https://m.media-amazon.com/images/I/71WGsXRgQrL._AC_SY400_.jpg ",name:"p-8"},
        {id:9,img:" https://m.media-amazon.com/images/I/81x8s9tASsL._AC_SY400_.jpg ",name:"p-9"},
        {id:10,img:" https://m.media-amazon.com/images/I/91yuQpw++mL._AC_SY400_.jpg ",name:"p-10"},
        {id:11,img:" https://m.media-amazon.com/images/I/61HHXRkRz6L._AC_SY400_.jpg ",name:"p-11"},
        {id:12,img:" https://m.media-amazon.com/images/I/41+Ar1-6FbL._AC_SY400_.jpg  ",name:"p-12"},
        {id:13,img:"https://m.media-amazon.com/images/I/71I2r88GXhL._AC_SY400_.jpg",name:"p-13"},
        {id:14,img:" https://m.media-amazon.com/images/I/61v3jWr-AlL._AC_SY400_.jpg ",name:"p-14"},
        {id:15,img:" https://m.media-amazon.com/images/I/71wm42EtoNL._AC_SY400_.jpg ",name:"p-15"},
        {id:16,img:" https://m.media-amazon.com/images/I/7194yVwYXFL._AC_SY400_.jpg",name:"p-16"},
        {id:17,img:" https://m.media-amazon.com/images/I/71UJx0RZinL._AC_SY400_.jpg",name:"p-17"},
        {id:18,img:"https://m.media-amazon.com/images/I/51CtR+quteL._AC_SY400_.jpg ",name:"p-18"},
        {id:19,img:"https://m.media-amazon.com/images/I/71wg8cNATZL._AC_SY400_.jpg" ,name:"p-19"},
        {id:20,img:"https://m.media-amazon.com/images/I/71DxWxvCwlL._AC_SY400_.jpg " ,name:"p-20"}, 
        {id:21,img:" https://m.media-amazon.com/images/I/71Iwj1RwoxL._AC_SY400_.jpg", name:"p-21"},
        {id:22,img:" https://m.media-amazon.com/images/I/71XEfI+E++L._AC_SY400_.jpg" ,name:"p-22"}, 
        {id:23,img:" https://m.media-amazon.com/images/I/71ma9Z+nn0L._AC_SY400_.jpg",name:"p-23"},
        {id:24,img:" https://m.media-amazon.com/images/I/81Mb+wFuOML._AC_SY400_.jpg",name:"p-24"},
        {id:25,img:"https://m.media-amazon.com/images/I/61vh3p7XXUL._AC_SY400_.jpg",name:"p-25"},
        {id:26,img:"https://m.media-amazon.com/images/I/81RBY5RQKpL._AC_SY400_.jpg" ,name:"p-26"}
         
       ]

 const containerRef=useRef(null);
const images=[
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61A-FJoXloL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/2025/Auto/Gateway/April/Vehicle-care--accessories-3000x1200-GW-BAU-PC._CB546108989_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044814._CB551384116_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/aprilGW/2x._CB547209600_.jpg",
    "https://m.media-amazon.com/images/G/01/AmazonExports/Events/2021/MothersDay/Fuji_LP_header_MD21_en_US.png",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/MayART/1/Deals-Revealed-PC-HERO-2x._CB796520283_.jpg"
]



    const scroll = (direction) => {
    if (!containerRef.current) return;

    const { clientWidth } = containerRef.current;

    if (direction === "left") {
      containerRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" });
    } else {
      containerRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
    }
  };
 


          

  return (
    
    <header className="bg-gray-300 text-white ml-3">
     {/* <div className="bg-gray-200">*/}
      <div className="flex items-center  justify-between p-2 px-4  gap-3 flex-wrap bg-black">

        {/* Logo */}
        <div className="flex items-center">
             <img  className="w-18 object-contain " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbF7cGHkMnweu8pt9PKxoc1LbnqV6k3lIS-tLNpHfulPX5zS7qIWhzMv6O42abYd0BSY&usqp=CAU"
            alt="Amazon Logo"
              />
              <span className="h-10 object-contain ">.in</span>
        </div>

        {/* Address */}
        <div className="hidden lg:flex flex-col items-start text-sm">
          <span className="text-gray-300">Deliver to</span>
          <div className="flex items-center gap-1 font-semibold">
            <FaLocationDot />
            <span>India</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className=" flex items-center  bg-white rounded-md w-full  max-w-[600px] mx-2 h-10">
          <div className='  text-black text-sm px-2 border-r border-gray-600 flex items-center cursor pointer' >All
  
            <RiArrowDropDownLine size={20}/>
            </div>
          <input
            type="text"
            placeholder="Search Amazon.in"
           className='flex-grow px-2 h-full outline-none text-black '
          />
          <button className=" bg-orange-400 h-full  px-4  py-2 flex items-center justify-center rounded-r-md ">
           <FaSearch className='text-white text-lg' />
          </button>
        </div>

        {/* Language */}
        <div className='flex items-center  text-sm '>
        	<img className="w-8 h-5 object-contain"  src= " https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png " alt="flag"/>
   

        <select className="hidden sm:flex items-center  text-sm ">
          <option>EN</option>
          <option>HI</option>
        </select>
        </div>

        {/* Sign In */}
        <div className="hidden sm:flex flex-col text-sm">
          <span>Hello, Sign in</span>
          <span className="font-bold">Account & Lists</span>
        </div>

        {/* Returns */}
        <div className="hidden sm:flex flex-col text-sm">
          <span>Returns</span>
          <span className="font-bold">& Orders</span>
        </div>

        {/* Cart */}
        <div className="flex items-center sspanace-x-1">
          <FaCartShopping size={20} />
          <span className='hidden md:inline text-sm font-bold mt-1'>Cart</span>
        </div>
      </div>

      {/* spananel */}
        <div className="bg-[#232f3e] h-15 flex items-center space-x-6 px-4">
          <div className='flex items-center gap-1 cursor-pointer'>
            <FaBars sx={{fontsize:"24px"}}/>

            <span className='font-semibold text-white'>All</span>
          </div>

     
  <span className="text-white text-sm font-medium cursor-pointer ">Today's Deals</span>
  <span className="text-white text-sm font-medium cursor-pointer ">Customer Service</span>
  <span className="text-white text-sm font-medium cursor-pointer ">Gift Cards</span>
  <span className="text-white text-sm font-medium cursor-pointer ">Sell</span>
  <span className="text-white text-sm font-medium cursor-pointer ">Mobiles</span>
  <span className="text-white text-sm font-medium cursor-pointer ">Electronics</span>
   <span className="text-white text-sm font-medium cursor-pointer ">Fashion</span>
   <span className="text-white text-sm font-medium cursor-pointer ">Home & Kitchen</span>
</div>

      <div className="relative w-full overflow-hidden ">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-3xl font-bold bg-white bg-opacity-60 px-3 py-1 rounded-full shadow"
      >
        &#60;
      </button>

    <div
        ref={containerRef}
        className="flex overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-start"
          >
            <img src={src} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-3xl font-bold bg-white bg-opacity-60 px-3 py-1 rounded-full shadow"
      >
        &#62;
      </button>
    </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 h-14 rounded-sm shadow-md w-[95%] max-w-[1030px] flex items-center jusatify-center text-ml text-gray-800 font-[Amazon Ember]">
        <span>
          
    You are on<strong> amazon.com</strong>. You can also shop on Amazon India for millions of products with fast local delivery.
          <a
            href="https://amazon.in"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to go to amazon.in
          </a>
        </span>
      </div>
      <br></br>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductCard
          title="Appliances for your home | Up to 55% off"
          linkText="See more"
          items={[
            { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg", label: "Air conditioners" },
            { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg", label: "Refrigerators" },
            { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg", label: "Microwaves" },   
             { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg", label: "Washing machines" },
          ]}
        />
             <ProductCard
          title="Revamp your home in style"
          linkText="Explore all"
          items={[
             { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg", label: "Cushion covers,bedsheets & more" },
               { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg", label: "Figurines,vases & more" },
                 { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg", label: "Home storage" },
                   { img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg", label: "Lighting solutions" }

          ]}
        />
       <ProductCard
          title="Starting ₹149 | Headphones"
          linkText="See all offers"
          items={[
             { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt._SY232_CB553870684_.jpg", label: " Starting ₹249 | boAt" },
              { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult._SY232_CB553870684_.jpg", label: " Starting ₹349 | boult" },
               { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise._SY232_CB553870684_.jpg", label: "Starting ₹649 | Noise" },
               { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_1._SY232_CB570220221_.jpg", label: "Starting ₹149 | Zebronics" }

          ]}
        />
         <ProductCard
          title="Automotive essentials | Up to 60% off"
          linkText="see more"
          items={[
    { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg", label: "Cleaning accessories" },
               { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg", label: "Tyre &rim care" },
                 { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg", label: "Helmets" },
                   { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg", label: "Vaccum cleaner" }

          ]}
         />
      
           <ProductCard 
          title="Starting ₹199 | Amazon Brands & more"
          linkText="See more"
          items={[
          { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg", label: "Starting ₹199 | Bedsheets" },
            { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_3._SY232_CB567468220_.jpg", label: "Starting ₹199 | Curtains" },
              { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_4._SY232_CB567468220_.jpg", label: "Minimum 40% off | Ironing board & more" },
                { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_1._SY232_CB567468220_.jpg", label: "Up to 60% off | Home decor" }
          ]}
             
        />
          
           <ProductCard 
          title="Up to 60% off | Styles for women"
          linkText="End of season sale"
          items={[
          { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg", label: "Women's Clothing" },
            { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-372-232._SY232_CB636048992_.jpg", label: "Footwear+Handbags" },
              { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-372-232._SY232_CB636048992_.jpg", label: "Watches" },
                { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg", label: "Fashion jewellery" }
          ]}
             
        />
         <ProductCard 
          title="Under ₹499 | Deals on home improvement essentials"
          linkText="Explore all"
          items={[
          { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Cleaning_wipes_hi-res_v3._SY232_CB549134196_.jpg", label: "Under ₹199 | Cleaning supplies" },
            { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_head__hi-res_v3._SY232_CB549134196_.jpg", label: "Under ₹399 | Bathroom accessories" },
              { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools__hi-res_v3._SY232_CB549134196_.jpg", label: "Under ₹499 | Home tools" },
                { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers__hi-res_v3._SY232_CB549134196_.jpg", label: "Under ₹299 | Wallpapers" }
          ]}
             
        />
       <ProductCard 
          title="Min. 40% off | Fun toys & games | Amazon brands"
          linkText="See all offers"
          items={[
          { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_372x232_9._SY232_CB563558900_.jpg", label: "Min. 40% off | soft toys" },
            { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_372x232_22._SY232_CB541411275_.jpg", label: "Min. 50% off | Ride ons" },
              { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_372x232_13._SY232_CB541414575_.jpg", label: "Min. 40% off | Indoor games" },
                { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_372x232_16._SY232_CB541411275_.jpg", label: "Min. 50% off | outdoor games" }
          ]}
             
        />
       
       
       <div className="relative w-screen mt-5 bg-gray-50">
      {/* Scrollable row of cards */}
      <div className="flex justify-between items-center px-4 mb-2 bg-white-50">
     
        <h2 href='#'className='text-gray-600  font-bold mb-2'>
        Up to 60% off | Best offers on kitchen products | Amazon Launchpad </h2>
        <a href='#'className='text-blue-600 text-sm hover:underline'>view all</a> 

        </div>
        <products
          title="
          Up to 60% off | Best offers on kitchen products | Amazon Launchpad"
          linkText="Explore all"
        />
        <div
        ref={productScrollRef}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth scrollbar-hide"
      >
        {products.map((product, index) => (
          <img
            key={product.id}
            ref={index === 0 ? cardRef : null}
            src={product.img}
            alt=""
            className="w-58 h-58 object-cover flex-shrink-0 rounded-md"
          />
        ))}
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={() => scrollProducts("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8592;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollProducts("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8594;
      </button>
      </div>
      </div>
    {/* ======================================================/*}
        
       <div className="relative w-screen mt-4 bg-gray-50">
      {/* Scrollable row of cards */}
         <div className="relative w-screen mt-8 bg-gray-50">
      <div className="flex justify-between items-center px-4 mb-2 bg-white-50">
     
     <h2 className='text-gray-600 font-bold'>
     Min. 30% off | Handpicked products from Small Businesses</h2>
     <a href='#'className='text-blue-600 text-sm hover:underline mb-5 '>See more</a> 

     </div>
     <products1
       title=" Min. 30% off | Handpicked products from Small Businesses
       "
       linkText="See more"
     />
         <div
        ref={productScrollRef1}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth scrollbar-hide"
      >
        {products1.map((products1, index) => (
          <img
            key={products1.id}
            ref={index === 0 ? cardRef1 : null}
            src={products1.img}
            alt=""
            className="w-48 h-48 object-cover flex-shrink-0 rounded-md"
          />
        ))}
         <button
        onClick={() => scrollProducts1("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8592;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollProducts1("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8594;
      </button>
      </div>
      </div>  



   <div className=' p-4 mt-6'>
      <div className="grid grid-cols-4 gap-4">
        {section.map((section, index) => (
          <div
            key={index}
            className=" bg-white shadow rounded p-2 flex flex-col items-center"
          >
            <h2 className="text-lg text-gray-600 font-bold mb-3">{section.title}</h2>
        
            <div className="grid grid-cols-2  gap-6">
              {section.items.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="product"
                  className="h-[100px] w-[120px] object-cover rounded"
                />
              ))}
                   <a href='#'className='text-blue-600 text-sm hover:underline mb-3 '>{section.linkText}</a>
            </div>
        
          
          </div>
        ))}
       
      </div>
      </div>
  

    {/* =================================================================================================== */}
    <div className="relative w-screen mt-6 bg-gray-50">
      <div className="flex justify-between items-center px-4 mb-2 bg-white-50 ">
     
     <h2 className='text-gray-600 font-bold'>
     Up to 50% off | Electronics & accessories from stores near you </h2>
     <a href='#'className='text-blue-600 text-sm hover:underline mb-5 '>See all offers</a> 

     </div>
     <products2
       title="    Up to 50% off | Electronics & accessories from stores near you   "
       linkText="See all offers"
     />
         <div
        ref={productScrollRef2}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth scrollbar-hide"
      >
        {products2.map((products2, index) => (
          <img
            key={products2.id}
            ref={index === 0 ? cardRef2 : null}
            src={products2.img}
            alt=""
            className="w-48 h-48 object-cover flex-shrink-0 rounded-md"
          />
        ))}
         <button
        onClick={() => scrollProducts2("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8592;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollProducts2("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8594;
      </button>
      </div>
      </div>  

{/* ======================================================================================*/}
<div className="relative w-screen mt-6 bg-gray-50">
      <div className="flex justify-between items-center px-4 mb-2 bg-white-50 ">
     
     <h2 className='text-gray-600 font-bold'>
     
Up to 60% off | Trending products from Emerging Businesses </h2>
     <a href='#'className='text-blue-600 text-sm hover:underline mb-5 '>See more</a> 

     </div>
     <products3
       title=" Up to 60% off | Trending products from Emerging Businesses   "
       linkText="See more"
     />
         <div
        ref={productScrollRef3}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth scrollbar-hide"
      >
        {products3.map((products3, index) => (
          <img
            key={products3.id}
            ref={index === 0 ? cardRef3 : null}
            src={products3.img}
            alt=""
            className="w-48 h-48 object-cover flex-shrink-0 rounded-md"
          />
        ))}
         <button
        onClick={() => scrollProducts3("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8592;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollProducts3("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8594;
      </button>
      </div>
      </div>

      <div className="bg-white p-4 rounded shadow max-w-240 h-60 mt-4 ml-60 pl-10  pt-10 ">
    <div className="flex space-x-2 items-center">
      
      
      <img src= "https://tse2.mm.bing.net/th?id=OIP.1jsiTZe2Do1BGlm5soeW7gHaHa&pid=Api&P=0&h=220" alt="Brand" className="w-20 h-20 object-contain" />
      
     
      
      
        <img src="https://m.media-amazon.com/images/I/716GH-AC7IL._SX679_.jpg" alt="Product" className="w-24 h-24 object-contain mb-2" />
        
       
        <p className="text-sm text-gray-800 font-medium leading-snug  ">
          OH CHA Brass Tea Infuser, Ball Shaped | BPA Free, Includes Green Tea | Filter...
        </p>
        </div>

        <div className="mt-1 text-sm flex items-center pl-50">
          <span className='font-bold text-gray-500'>3⭐⭐⭐4.7</span>
          </div>

          <div className='mt-1 text-sm flex items-center pl-50'>
          <span className="bg-red-600 text-white-600 font-bold">Limited time deal</span>
          </div>
          <div className='mt-1 text-sm flex items-center pl-50'>
          <span className="text-green-500 text-lg ml-2 font-bold" >23% off</span>
          <span className="text-gray-600  ml-2 text-lg font-medium"><sup>₹</sup>502<sup>00</sup></span>
         <span className='text-gray-600 text-md ml-2 font-semibold'>M.R.P.:</span>
          <span className="text-gray-600 line-through ml-2 text-md font-smibod">₹650.00</span>

          <svg class="h-5 w-5 text-yellow-600 pl-1 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
  <span class="text-md font-medium text-blue-500">prime</span>


       
        </div>
        </div>
        <br></br>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductCard1
          title="Best Sellers in Sports, Fitness & Outdoors"
          items={[      
            { img: "https://m.media-amazon.com/images/I/710SxepIfiL._AC_SY340_.jpg"},
            { img: "https://m.media-amazon.com/images/I/61Av1lptLkL._AC_SY340_.jpg" },
            { img: "https://m.media-amazon.com/images/I/61pqeHoXFZL._AC_SY340_.jpg"},
            { img: "https://m.media-amazon.com/images/I/71LFB0J7Z4L._AC_SY340_.jpg"}
          ]}
          />
             <ProductCard1
          title="Customers’ Most-Loved Fashion for you"
          items={[      
            { img: "https://m.media-amazon.com/images/I/616iBhe2roL._AC_SY145_.jpg "},
            { img: "https://m.media-amazon.com/images/I/61H548ZWlEL._AC_SY290_.jpg"},
            { img: "https://m.media-amazon.com/images/I/61BjE6XZ+KL._AC_SY290_.jpg"},
            { img: "https://m.media-amazon.com/images/I/71AcV5DVTdL._AC_SY290_.jpg"}
          
          ]}
          />
                <ProductCard1
          title="Up to 60% off | Best offers on kitchen products | Amazon…"
          items={[      
            { img: "https://m.media-amazon.com/images/I/61-6yDuvBxL._AC_SY350_.jpg "},
            { img: " https://m.media-amazon.com/images/I/61VwuY8hiyL._AC_SY350_.jpg"},
            { img: "https://m.media-amazon.com/images/I/612kNIJYPKL._AC_SY175_.jpg" },
            { img: "https://m.media-amazon.com/images/I/51PH6t3t47L._AC_SY350_.jpg "}
          
          ]}
          />
                <ProductCard1
          title="Starting ₹199 | Kids’ favorite top rated toys "
          items={[  
            { img: " https://m.media-amazon.com/images/I/41WVOijNi1L._AC_SY350_.jpg"},
            { img: " https://m.media-amazon.com/images/I/51DPplxxK9L._AC_SY175_.jpg"},
            { img: " https://m.media-amazon.com/images/I/41Pmnm087yL._AC_SY175_.jpg"},
            { img: " https://m.media-amazon.com/images/I/51i0he92iTL._AC_SY175_.jpg"}
          ]}
          />
   </div>
  
   <div className="relative w-screen mt-8 bg-gray-50">
      <div className="flex justify-between items-center px-4 mb-2 bg-white-50">
     
     <h2 className='text-gray-600 font-bold'>
     Best Sellers in Books</h2>
     <a href='#'className='text-blue-600 text-sm hover:underline mb-5 '></a> 

     </div>
     <products4
       title="Best Sellers in Books
       "
       linkText=""
     />
         <div
        ref={productScrollRef4}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth scrollbar-hide"
      >
        {products4.map((products4, index) => (
          <img
            key={products4.id}
            ref={index === 0 ? cardRef4 : null}
            src={products4.img}
            alt=""
            className="w-48 h-48 object-cover flex-shrink-0 rounded-md"
          />
        ))}
         <button
        onClick={() => scrollProducts4("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8592;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollProducts4("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8594;
      </button>
      </div>
      </div>  
      
   <div className="relative w-screen mt-8 bg-gray-50">
      <div className="flex justify-between items-center px-4 mb-2 bg-white-50">
     
     <h2 className='text-gray-600 font-bold'>
     Best Sellers in Sports & Outdoors</h2>
     <a href='#'className='text-blue-600 text-sm hover:underline mb-5 '></a> 

     </div>
     <products5
       title="Best Sellers in Sports & Outdoors
       "
       linkText=""
     />
         <div
        ref={productScrollRef5}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth scrollbar-hide"
      >
        {products5.map((products5, index) => (
          <img
            key={products5.id}
            ref={index === 0 ? cardRef5 : null}
            src={products5.img}
            alt=""
            className="w-48 h-48 object-cover flex-shrink-0 rounded-md"
          />
        ))}
         <button
        onClick={() => scrollProducts5("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8592;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollProducts5("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 bg-opacity-70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        &#8594;
      </button>
      </div>
      </div>  
      <footer className="bg-gray-800 text-white mt-10">
  {/* Back to Top */}
  <div className="bg-gray-700 text-center py-3 cursor-pointer hover:bg-gray-600">
    <p className="text-md">Back to top</p>
  </div>

  {/* Main Footer Links */}
  <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
    <div>
      <h3 className="font-bold mb-2">Get to Know Us</h3>
      <ul>
        <li className="mb-1 hover:underline cursor-pointer">About Us</li>
        <li className="mb-1 hover:underline cursor-pointer">Careers</li>
        <li className="mb-1 hover:underline cursor-pointer">Press Releases</li>
        <li className="mb-1 hover:underline cursor-pointer">Amazon Science</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-2">Connect with Us</h3>
      <ul>
        <li className="mb-1 hover:underline cursor-pointer">Facebook</li>
        <li className="mb-1 hover:underline cursor-pointer">Twitter</li>
        <li className="mb-1 hover:underline cursor-pointer">Instagram</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-2">Make Money with Us</h3>
      <ul>
        <li className="mb-1 hover:underline cursor-pointer">Sell on Amazon</li>
        <li className="mb-1 hover:underline cursor-pointer">Sell under Amazon Accelerator</li>
        <li className="mb-1 hover:underline cursor-pointer">Protect and Build Your Brand</li>
        <li className="mb-1 hover:underline cursor-pointer">Amazon Global Selling</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-2">Let Us Help You</h3>
      <ul>
        <li className="mb-1 hover:underline cursor-pointer">Your Account</li>
        <li className="mb-1 hover:underline cursor-pointer">Returns Centre</li>
        <li className="mb-1 hover:underline cursor-pointer">100% Purchase Protection</li>
        <li className="mb-1 hover:underline cursor-pointer">Help</li>
      </ul>
    </div>
  </div>

  {/* Language & Country 
  <div className="border-t border-gray-600 py-4 text-center text-xs text-gray-800">
    <p>© 2025 Amazon Clone. Built by khushi using Tailwind CSS.</p>
  </div>
  <div className="max-w-6xl mx-auto px-4 text-center">
    <p className="text-sm md:text-base text-white-800 hover:text-pink  transition duration-300 ease-in-out">
      © 2025 Amazon Clone. Designed with ❤ by [Your Name]. All rights reserved.
    </p>
  </div>*/}
<div className=" bg-gray-900 text-white py-4">
  <div className="max-w-6xl mx-auto px-4 text-center">
      © 2025 Amazon Clone. Designed by khushi. All rights reserved.
   
  </div>
</div>
</footer>







     


             
      

   


              
    </header>
  );
};

  
 export default Navbar;

