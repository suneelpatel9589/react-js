

function Contact() {
    return (
      <>
 

              <section className="bg-green-800 pb-20 pt-5  ">
        <h1 style={{textAlign:"center",fontFamily:"Bad Script", fontSize:"30px",color:"orange" }}>Costumer Review</h1>
        <p className="text-center text-white text-sm mt-2">Follow intruction for more</p>

        <div className="flex justify-evenly p-20">



 
        <div className="border h-40 w-80 bg-green-100 rounded   ">

            <div>
          <p className="mb-5 pt-2 text-center">Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Corporis blanditiis officiis <br />
          tempora ipsa ad! Exercitationem, autem </p>

        </div>
        <div className="flex gap-20 ml-5 ">

        <div className="flex items-center gap-1">
          <img src="review-1.jpg" alt=""  className="h-10 w-10  rounded-full"/>
          <div>
             <h1 className="text-orange-500">JHON DOE</h1>
          <h3>Designer</h3>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>


              <div className="border h-40 w-80 bg-green-100 rounded">

            <div>
          <p className="mb-5 pt-2 text-center">Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Corporis blanditiis officiis <br />
          tempora ipsa ad! Exercitationem, autem </p>

        </div>
        <div className="flex gap-20 ml-5 ">

        <div className="flex items-center gap-1">
          <img src="review-2.jpg" alt=""  className="h-10 w-10  rounded-full"/>
          <div>
             <h1 className="text-orange-500">JHON DOE</h1>
          <h3>Designer</h3>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>


              <div className="border h-40 w-80 bg-green-100 rounded">

            <div>
          <p className="mb-5 pt-2 text-center">Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Corporis blanditiis officiis <br />
          tempora ipsa ad! Exercitationem, autem </p>

        </div>
        <div className="flex gap-20 ml-5 ">

        <div className="flex items-center gap-1">
          <img src="review-3.jpg" alt=""  className="h-10 w-10  rounded-full"/>
          <div>
            <h1 className="text-orange-500">JHON DOE</h1>
          <h3>Designer</h3>
          </div>
        </div>
        <div>
         <h1 className="text-3xl">,,</h1>
        </div>
        </div>
        </div>


        </div>

        </section>




        <div className="bg-green-900  translate-y-[-70px] rounded w-350  h-40  ml-16 pt-6">
          <h1 className="text-3xl mb-3 ml-30"><span className="text-orange-500">Subscribe</span> to our newsletter</h1>
          <input type="text" placeholder="Your Email Address" className="w-250 h-11 bg-white  pl-5 rounded-sm ml-30 " /><button className=" px-4 py-2 ml-2 rounded-sm bg-green-600">subscribe</button>
        </div>


        <div className=" flex justify-around  bg-white text-green-700 pb-10 list-none">

         <div>
          <img src="leaf.png" alt="" className="w-13 h-13  ml-11" />
         <h1 style={{fontFamily:"Bad Script" ,fontSize:"30px" , fontWeight:"bold"}}>SatnaPlants</h1>
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




export default Contact;