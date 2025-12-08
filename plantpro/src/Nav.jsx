import { faBars, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Outlet } from "react-router-dom"


function Nav(){
    return(
        <>
           
        <nav className="  md: flex justify-around items-center bg-green-800 p-5 sticky top-0 z-50">
            <div>
               <h1 style={{ fontFamily: "Bad Script",fontWeight:"bolder", fontSize:"25px", color:"orange"}}>SatnaPlants</h1>
            </div>
            <ul className="md:flex items-center  space-x-20 text-white font-bold">
             <li className="hover:text-orange-400"> <Link to="/">Home</Link></li>
             <li className="hover:text-orange-400"> <Link to="/About2">About</Link> </li>
             <li className="hover:text-orange-400"><Link to="/About">Popular</Link></li>
             <li className="hover:text-orange-400"><Link to="/Contact">Review</Link></li>
           </ul>
           
           <Link to="/Sign"> <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer" /></Link>
          
           
           
   
        </nav>

      <Outlet/>

      

 




            </>

            
               
            
            
       
    )
}
export default Nav