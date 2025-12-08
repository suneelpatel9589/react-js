import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeadset,faPlantWilt,faTruck ,faDollar,faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <>
        <section className=" md:flex justify-evenly items-center bg-green-800 p-20">
            <div>
                <h1 className="text-4xl font-bold "><span className="text-orange-400 ">Plants</span> make a <br />positive <span className="text-orange-400">impact</span> on <br />your environment</h1>
                <p style={{ fontFamily: "Bad Script",marginTop:"20px",fontSize:"20px",fontWeight:"bold",color:"skyblue" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat <br />
                    eveniet, reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur numquam!
                </p>
                <div className=" md:flex gap-8 mt-5">
                    <button className="bg-yellow-500 text-white px-10 py-2 rounded ">Shop Now</button>
                    <button className="bg-transparent  border border-yellow-500 text-white px-10 py-2 rounded">Know More 🌿</button>
                </div>
                <p className="mt-4 text-white">Yes, you will get a 30-day free trial</p>
                <div className="flex space-x-4 mt-8">
                    <i class="fa-brands fa-facebook-f" style={{color:"white"}}></i>
                    <i class="fa-brands fa-twitter" style={{color:"white"}}></i>
                    <i class="fa-brands fa-instagram" style={{color:"white"}}></i>
                    <i class="fa-brands fa-linkedin" style={{color:"white"}}></i>
                </div>
            </div>

            <div>
                <img src="home.png" alt="plant cart" className=" h-150 w-150" />
            </div>
            
        </section>
             <section className="bg-green-800 ">
               <h1 style={{fontFamily:"Bad Script" , textAlign:"center", fontSize:"30px", color:"orange" , fontWeight:"bold"}}>About Us</h1>
                <p className="text-center font-bold">Follow intruction for more</p>

            <div className=" md:flex  justify-evenly items-center mt-10 ">
                <div>
                    <img src="plant-1.png" alt="" className="h-100  w-100" />
                </div>
               <div>
                 <h1 className="text-white text-3xl ">Make your <span className="text-yellow-500">Organic </span> <br />  garden</h1>
                 <p style={{fontFamily:"Bad Script" , fontSize:"15px", marginTop:"20px", color:"white" ,fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum esse <br />
                    commodi recusandae nam perferendis quibusdam quod minima, quia officiis repellat <br />
                     laboriosam nesciunt nihil et dolores voluptatibus odit enim eligendi.</p>
               </div>
              
            </div>

            <div  className=" md:flex justify-evenly items-center mt-10 ">
                <div>
                     <h1 className="text-white text-3xl ">Come with us <br /> <span className="text-yellow-500">grow up </span>  your plant</h1>
                 <p style={{fontFamily:"Bad Script" , fontSize:"15px", marginTop:"20px", color:"white" ,fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum esse <br />
                    commodi recusandae nam perferendis quibusdam quod minima, quia officiis repellat <br />
                     laboriosam nesciunt nihil et dolores voluptatibus odit enim eligendi.</p>
                </div>
                <div>
                    <img src="plant-2.png" alt="" className="h-100  w-100" />
                </div>
            </div>
        </section>

          <section className=" flex bg-green-800 p-20 items-center justify-center text-green-800  ">
          <div className=' md:flex   bg-white items-center justify-evenly px-40 py-18 md:space-x-12 '>
            <div className="bg-white h-45 w-60 pl-6 pt-4 rounded-md border">
                <div className=" flex items-center gap-10 ">
                    <FontAwesomeIcon icon={faTruck} style={{color:"green" ,fontSize:"25px"}} />
                    <h1 className='font-bold'>Fast <br /> Delivery</h1>
                </div>
                <p className="mt-5">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> facere debitis omnis</p>

            </div>

              <div className="bg-white h-45 w-60 pl-6 pt-4 rounded-md border ">
                <div className="flex items-center gap-10 " >
                   <FontAwesomeIcon icon={faHeadset} style={{color:"green",fontSize:"25px" }}/>
                    
                    <h1  className='font-bold'>Green Customer  <br /> Service</h1>
                </div>
                <p className="mt-5">Lorem ipsum dolor sit amet  <br />consectetur adipisicing elit. <br /> facere debitis omnis</p>

            </div>

              <div className="bg-white h-45 w-60 pl-6 pt-4 rounded-md  border">

                <div className="flex items-center gap-10 ">
                    <FontAwesomeIcon icon={faPlantWilt} style={{color:"green",fontSize:"25px"}}/>
                    <h1  className='font-bold'>Original<br /> Plants</h1>
                </div>
                <p className="mt-5" >Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> facere debitis omnis</p>

            </div>

            <div className="bg-white h-45 w-60 pl-6 pt-4 rounded-md border ">
                  <div className="flex items-center gap-10 ">
                    <FontAwesomeIcon icon={faDollar} style={{color:"green" ,fontSize:"25px"}} />
                    <h1  className='font-bold'>Affordable<br /> Price</h1>
                </div>
                <p className="mt-5">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> facere debitis omnis</p>
            </div>

            </div>
        
           

        </section>
         <section className=' bg-green-600 p-2'>
            
        
                <h1 style={{textAlign:"center" ,fontFamily:"Bad Script" ,fontSize:"30px",marginTop:"35px",color:"orange",fontWeight:"bold"}}>Your Choice Plant</h1>
                <p className='text-center mt-3'>Follow intruction for more</p>   
        
                <div className=' md:flex justify-around items-center bg-green-600 mt-30 p-10 gap-32'>
                      <div className='bg-green-800 h-64 w-60 rounded-md'>
                    <img src="cart-1.png" alt="" className='relative -translate-y-[105px]  h-48  ml-6'/>
                    <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Nephrolepis exatata</p>
                    <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Boston Fern</h1>
                    <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
                    <div className='flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                        <h1>$5</h1>
                        <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
                    </div>
        
                </div>
        
        
        
        
                  <div className='bg-green-800 h-62 w-60 rounded-md'>
                    <img src="cart-2.png" alt="" className='relative -translate-y-[100px]  h-45  ml-6'/>
                    <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Ficus elastica</p>
                    <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Rubber Plant</h1>
                    <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
                    <div className='flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                        <h1>$5</h1>
                        <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
                    </div>
        
                </div>
        
                  <div className='bg-green-800 h-62 w-60 rounded-md'>
                    <img src="cart-3.png" alt="" className='relative -translate-y-[100px]  h-45  ml-6'/>
                    <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Spathiphyllum wallisii</p>
                    <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Peach Lily</h1>
                    <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
                    <div className='flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                        <h1>$5</h1>
                        <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
                    </div>
        
                </div>
        
                   <div className='bg-green-800 h-62 w-60 rounded-md'>
                    <img src="cart-4.png" alt="" className='relative -translate-y-[100px]  h-45  ml-6'/>
                    <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Adenium obesum</p>
                    <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Desert Rose</h1>
                    <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
                    <div className='md: flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                        <h1>$5</h1>
                        <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
                    </div>
        
                </div>
                    </div>     
              
                
                    
        
            
              </section>

              <section className="bg-green-800 pb-20 pt-5  ">
        <h1 style={{textAlign:"center",fontFamily:"Bad Script", fontSize:"30px",color:"orange" }}>Costumer Review</h1>
        <p className="text-center text-white text-sm mt-2">Follow intruction for more</p>

        <div className="md:flex justify-evenly p-20">



 
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


        <div className=" md:flex justify-around  bg-white text-green-700 pb-10 list-none ">

         <div>
          <img src="leaf.png" alt="" className="w-14 h-14 ml-11" />
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
          
         </div>
        </div>

        

      

       


        </>


    
        
    );
}

export default Home