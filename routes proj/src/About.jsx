
import { useState } from "react";
import cake from "./assets/birthday cake.jpg";

function About(){
    let[b,change]=useState()
    return(
        <section className="p-20 bg-yellow-100">


            
                <div className="flex justify-around">
                     <div className="bg-blue-400 w-60 h-70 rounded">
                <img src={cake} alt="" className="h-40 w-40 ml-10 pt-3" />
                <h1 className="text-center text-2xl">Non-egg cake</h1>
                <button className="bg-red-300 px-3 py-2 border rounded ml-18 mt-3 " onClick={()=>change(alert('welcome'))}>see more</button>
            </div>

               <div className="bg-blue-400 w-60 h-70 rounded">
                <img src="raspberry cake.jpg" alt="" className="h-41 w-41 ml-10 pt-3" />
                <h1 className="text-center text-2xl ">Cake</h1>
                <button className="bg-red-300 px-3 py-2 border rounded ml-18 mt-3 ">see more</button>
            </div>


               <div className="bg-blue-400 w-60 h-70 rounded">
                <img src={cake} alt="" className="h-40 w-40 ml-10 pt-3 " />
                <h1 className="text-center text-2xl">chocolate-cake</h1>
                <button className="bg-red-300 px-3 py-2 border rounded ml-18 mt-3 ">see more</button>
            </div>

                
            </div>
            


        
        </section>
    )
}
export default About