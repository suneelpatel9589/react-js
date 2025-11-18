import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeadset,faPlantWilt,faTruck ,faDollar} from '@fortawesome/free-solid-svg-icons'
function About2(){
    return(
        <>
        <section className="bg-green-800 ">
               <h1 style={{fontFamily:"Bad Script" , textAlign:"center", fontSize:"30px", color:"orange" , fontWeight:"bold"}}>About Us</h1>
                <p className="text-center font-bold">Follow intruction for more</p>

            <div className="flex justify-evenly items-center mt-10 ">
                <div>
                    <img src="plant-1.png" alt="" className="h-100 w-100" />
                </div>
               <div>
                 <h1 className="text-white text-3xl ">Make your <span className="text-yellow-500">Organic </span> <br />  garden</h1>
                 <p style={{fontFamily:"Bad Script" , fontSize:"15px", marginTop:"20px", color:"white" ,fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum esse <br />
                    commodi recusandae nam perferendis quibusdam quod minima, quia officiis repellat <br />
                     laboriosam nesciunt nihil et dolores voluptatibus odit enim eligendi.</p>
               </div>
              
            </div>

            <div  className="flex justify-evenly items-center mt-10 ">
                <div>
                     <h1 className="text-white text-3xl ">Come with us <br /> <span className="text-yellow-500">grow up </span>  your plant</h1>
                 <p style={{fontFamily:"Bad Script" , fontSize:"15px", marginTop:"20px", color:"white" ,fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum esse <br />
                    commodi recusandae nam perferendis quibusdam quod minima, quia officiis repellat <br />
                     laboriosam nesciunt nihil et dolores voluptatibus odit enim eligendi.</p>
                </div>
                <div>
                    <img src="plant-2.png" alt="" className="h-100 w-100" />
                </div>
            </div>
        </section>
          <section className="flex bg-green-800 p-20 items-center justify-center text-green-800  ">
          <div className='flex  bg-white items-center justify-evenly px-40 py-18 space-x-12 '>
            <div className="bg-white h-45 w-60 pl-6 pt-4 rounded-md border">
                <div className="flex items-center gap-10 ">
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
        </>
    )
}
export default About2