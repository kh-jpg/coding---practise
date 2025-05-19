import React,{useRef}from "react";
import '../App.css'
import { } from "framer-motion";
//import { FaLocationDot, FaSearch, FaShospanspaningCart, FaBars } from 'react-icons/fa6';
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
}
     
  
/*const ProductScroll = ({ products})=>{
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };*/

  /*return (
    <div className="relative w-full bg-white p-4">
      {/* Left Button */
   /*   <button
        onClick={() => scroll(-600)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 hover:bg-gray-900"
      >
        &lt;
      </button>

      {/* Scrollable Cards */
     /* <div
        ref={scrollRef}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth gap-4"
      >
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-48 bg-gray-100 rounded-lg shadow-md p-3">
            <img src={product.img} alt={product.title} className="h-28 w-full object-contain mb-2" />
            <h3 className="text-center font-semibold text-sm">{product.title}</h3>
            <p className="text-center text-xs text-gray-600">{product.label}</p>
            <a href={product.link} className="block text-center text-blue-600 text-sm mt-1 hover:underline">
              {product.linkText}
            </a>
          </div>
        ))}
      </div>

      {/* Right Button */
      /*<button
        onClick={() => scroll(600)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 hover:bg-gray-900"
      >
        &gt;
      </button>
    </div>
  );
};



{/*const HorizontalScroll = ({ title,items ,linkText}) => {
  const scrollRef = useRef(null);

  // Function to scroll left by 6 images (each image is 220px wide)
  const scrollLeft = () => {
        if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth; // Pura container jitna scroll
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  //if (scrollRef.current)
     //crollRef.current.scrollBy({ left: -1320, behavior: 'smooth' }); // 6 * 220px = 1320px
  //}
  };

  // Function to scroll right by 6 images
  const scrollRight = () => {
       if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
         <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
    <div className="relative w-full">
      {/* Left Arrow */
   /*  <button
        onClick={scrollLeft}
       className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900" >
        &lt;
      </button>

      {/* Horizontal Scrollable Area 
      <div className="overflow-hidden py-4">*/
   /*    <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-4 py-4 px-10"
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[200px] bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-center font-bold mb-2">{item.title}</h2>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-[150px] object-contain mb-2"
                />
                <p className="text-sm text-center">{item.label}</p>
                <a href={item.link} className="text-blue-600 hover:underline text-sm mt-2 block text-center"> {linkText}
                 </a>
                 </div>
                   ))}
                 </div>

          {/* Right Arrow */
   /*  <button
        onClick={scrollRight}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 z-10"
      >
        &gt;
      </button>
              </div>
              </div>
 
   
  );
};*/
      






const Navbar = () => {
       
   
     /*  const items={[  
    
         {img:'  https://m.media-amazon.com/images/I/41ajCrlwCVL._AC_SY400_.jpg '},
         {img:' https://m.media-amazon.com/images/I/710REZTM6BL._AC_SY400_.jpg '},
         {img:' https://m.media-amazon.com/images/I/51fRG3cpZtL._AC_SY400_.jpg '},
         {img:' https://m.media-amazon.com/images/I/71Te8JoONsL._AC_SY400_.jpg '},
         {img:' https://m.media-amazon.com/images/I/51yWRsXNeTL._AC_SY400_.jpg '},
          {img:'https://m.media-amazon.com/images/I/51yWRsXNeTL._AC_SY400_.jpg  '}

        ]}*/
  
   


 const containerRef=useRef(null);
const images=[
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
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
    
    <header className="bg-gray-300 text-white">
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
        	<img src="https://tse1.mm.bing.net/th?id=OIP.YHufaYYtdq8EtHQRPAx_9QHaE8&pid=Api&P=0&h=220" alt="flag"className="w-8 h-5 object-contain"/>
   

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

      <div className="relative w-full overflow-hidden">
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
 
        <ProductCard
        title="MAHI"
        linkText="see"
        items={[
             {img:"https://wallpapercave.com/wp/wp2525416.jpg",label:"boy"},
             
    
        ]}
      />
        </div>
 
                       
    </header>
   

   
  );
}

export default Navbar;

