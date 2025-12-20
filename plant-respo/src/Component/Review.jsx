
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
     dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          
        }
      },
      {
        breakpoint: 480 ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }
    ]
  };
  return (
    <>
    <div className="bg-green-700 p-1">
      <h1 className="text-center text-orange-400 text-xl mb-2 italic ">Costumer Review</h1>
        <p className="text-center text-white text-sm ">Follow intruction for more</p>
    </div>

    {/* Slider Container */}
    <div className="slider-container bg-green-700 px-10 py-10 ">
    
      <Slider {...settings} >
        <div className="pb-2">
            <div className=" h-36 w-xs p-1 bg-white rounded   ">

            <div>
          <p className="text-sm  ">“I love how simple and clear this website is.  <br />It provides all the important details about  <br /> in an easy-to-understand way. A great tool for students and plant enthusiasts alike.” </p>

        </div>
        <div className="flex space-x-14 mt-2 ">

        <div className="flex items-center gap-1">
          <img src="review-1.jpg" alt=""  className="h-9 w-9  rounded-full"/>
          <div>
             <h4 className="text-orange-500 text-sm">JHON DOE</h4>
          <p className="text-sm">Designer</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>
  
        </div>
        {/* 2nd */}
        <div>
            <div className=" h-36 w-xs p-1 bg-white rounded   ">

            <div>
          <p className="text-sm  ">“I love how simple and clear this website is.  <br />It provides all the important details about  <br /> in an easy-to-understand way. A great tool for students and plant enthusiasts alike.” </p>

        </div>
        <div className="flex space-x-14 mt-2 ">

        <div className="flex items-center gap-1">
          <img src="review-2.jpg" alt=""  className="h-9 w-9  rounded-full"/>
          <div>
             <h4 className="text-orange-500 text-sm">JHON DOE</h4>
          <p className="text-sm">Designer</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>

        </div>
        {/* 3rd */}
        <div>
            <div className=" h-36 w-xs p-1  bg-white rounded   ">

            <div>
          <p className="text-sm  ">“I love how simple and clear this website is.  <br />It provides all the important details about  <br /> in an easy-to-understand way. A great tool for students and plant enthusiasts alike.” </p>

        </div>
        <div className="flex space-x-14 mt-2 ">

        <div className="flex items-center gap-1">
          <img src="review-3.jpg" alt=""  className="h-9 w-9  rounded-full"/>
          <div>
             <h4 className="text-orange-500 text-sm">JHON DOE</h4>
          <p className="text-sm">Designer</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>

        </div>
        {/* 4th */}
        <div>
            <div className=" h-36 w-xs p-1  bg-white rounded   ">

            <div>
          <p className="text-sm  ">“I love how simple and clear this website is.  <br />It provides all the important details about  <br /> in an easy-to-understand way. A great tool for students and plant enthusiasts alike.” </p>

        </div>
        <div className="flex space-x-14 mt-2 ">

        <div className="flex items-center gap-1">
          <img src="review-4.jpg" alt=""  className="h-9 w-9  rounded-full"/>
          <div>
             <h4 className="text-orange-500 text-sm">JHON DOE</h4>
          <p className="text-sm">Designer</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>

        </div>
        {/* 5th */}
        <div>
            <div className=" h-36 w-xs p-1 bg-white rounded   ">

            <div>
          <p className="text-sm  ">“I love how simple and clear this website is.  <br />It provides all the important details about  <br /> in an easy-to-understand way. A great tool for students and plant enthusiasts alike.” </p>

        </div>
        <div className="flex space-x-14 mt-2 ">

        <div className="flex items-center gap-1">
          <img src="review-5.jpg" alt=""  className="h-9 w-9  rounded-full"/>
          <div>
             <h4 className="text-orange-500 text-sm">JHON DOE</h4>
          <p className="text-sm">Designer</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>

        </div>
        {/* 6th */}
        <div>
            <div className=" h-36 w-xs p-1  bg-white rounded   ">

            <div>
          <p className="text-sm  ">“I love how simple and clear this website is.  <br />It provides all the important details about  <br /> in an easy-to-understand way. A great tool for students and plant enthusiasts alike.” </p>

        </div>
        <div className="flex space-x-14 mt-2 ">

        <div className="flex items-center gap-1">
          <img src="review-6.jpg" alt=""  className="h-10 w-10  rounded-full"/>
          <div>
             <h4 className="text-orange-500 text-sm">JHON DOE</h4>
          <p className="text-sm">Designer</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>
        </div>
      </Slider>
    </div>

    {/* contact */}

          <div className=" sm:flex sm:pl-0 pl-5 justify-around items-center  bg-gray-100 text-green-700 pb-10 list-none pt-3">

         <div>
          <img src="leaf.png" alt="" className="w-12 h-12  ml-10" />
         <h1>SatnaPlants</h1>
         </div>

         <div>
          <h1 className="text-xl mb-3 font-bold">Quick Link</h1>
          <li>Plants</li>
          <li>FLower</li>
          <li>Gerdening</li>
          <li>Seeds</li>
          <li>Shipping</li>
         </div>

         <div>
          <h1  className="text-xl mb-3 font-bold">Popular Services</h1>
          <li>Tree planting</li>
          <li>Grass Cutting</li>
          <li> Weeds Control</li>
          <li>Project</li>
         </div>

         <div>
           <h1 className="text-xl mb-3 font-bold">Contact Us</h1>
          <li>+919589115046</li>
          <li>Satnaplants9589@gmail.com</li>
          <li>53, Arerahills Colony,city <br />Satna ,485881 MP</li>
          <li></li>
          <li></li>
         </div>
        </div>    

    </>


  );
}

export default AutoPlay;



