import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeadset,faPlantWilt,faTruck ,faDollar} from '@fortawesome/free-solid-svg-icons'
function About2(){
    return(
        <>
        <section className="bg-green-700 pb-1  ">
               <h1 className='text-orange-600 italic text-center text-3xl mb-4 sm:pt-0 pt-2'>About Us</h1>
                <p className="text-center text-white font-bold">Follow intruction for more</p>

            <div className="sm:flex justify-evenly items-center mt-10 ">
                <div>
                    <img src="plant-1.png" alt="" className="h-80 w-80 object-cover mx-auto   "  />
                </div>
               <div>
                   <h1 className="text-white text-3xl sm:ml-0 ml-3  ">Make your <span className="text-yellow-500">Organic </span> <br />  garden</h1>
                   <p className='italic text-white mt-3 sm:ml-0 ml-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum esse </p> 
                   <p className='italic text-white sm:ml-0 ml-3  '> commodi recusandae nam perferendis quibusdam quod minima, quia officiis </p>
                   <p className='italic text-white sm:ml-0 ml-3  '> laboriosam nesciunt nihil et dolores voluptatibus odit enim eligendi.</p>
               </div>
              
            </div>

            <div  className="sm:flex justify-evenly items-center mt-10 ">
                <div>
                     <h1 className="text-white text-3xl  ml-3 sm:ml-0   md:ml-3  ">Come with us <br /> <span className="text-yellow-500">grow up </span>  your plant</h1>
                 <p className='italic text-white mt-2   ml-3 sm:ml-0  md:ml-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum esse </p>
                 <p className='italic text-white  ml-3 sm:ml-0  md:ml-3'>commodi recusandae nam perferendis quibusdam quod minima, quia officiis repellat </p>
                     <p className='italic text-white  ml-3 sm:ml-0  md:ml-3'> laboriosam nesciunt nihil et dolores voluptatibus odit enim eligendi.</p>
                </div>
                <div>
                     <img src="plant-2.png" className="h-80 w-80 object-cover mx-auto " />

                </div>
            </div>
            </section>
            {/* box */}

             <section className="bg-green-700  p-8 ">
            <div className="  flex justify-evenly items-center bg-white p-10 text-green-700  flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 md:space-x-3 ">
            <div className="border p-3 rounded-md  bg-white  ">
                <div className="flex items-center gap-10   ">
                    <FontAwesomeIcon icon={faTruck} />
                    <h1 className='font-bold'>Fast <br /> Delivery</h1>
                </div>
                <p className="mt-5">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> facere debitis omnis</p>

            </div>

             <div className="border p-2 rounded-md  ">
                <div className="flex items-center gap-10  ">
                    <FontAwesomeIcon icon={faHeadset}/>
                    <h1 className='font-bold'>Fast <br /> Delivery</h1>
                </div>
                <p className="mt-5">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> facere debitis omnis</p>

            </div>

             <div className="border p-2 rounded-md ">
                <div className="flex items-center gap-10   ">
                    <FontAwesomeIcon icon={faPlantWilt}/>
                    <h1 className='font-bold'>Fast <br /> Delivery</h1>
                </div>
                <p className="mt-5">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> facere debitis omnis</p>

            </div>

             <div className="border p-2 rounded-md  ">
                <div className="flex items-center gap-10  ">
                    <FontAwesomeIcon icon={faDollar}/>
                    <h1 className='font-bold'>Fast <br /> Delivery</h1>
                </div>
                <p className="mt-5">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> facere debitis omnis</p>

            </div>

            </div>

            </section>
           
    
        
   
        </>
    )
}
export default About2