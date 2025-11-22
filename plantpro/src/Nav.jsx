import { Link } from "react-router-dom"


function Nav(){
    return(
        
        <nav className="flex justify-around item-center bg-green-800 p-5 sticky top-0">
            <div>
               <h1 style={{ fontFamily: "Bad Script",fontWeight:"bolder", fontSize:"25px", color:"orange"}}>SatnaPlants</h1>
            </div>
            <ul className="flex  item-center gap-15 text-white font-bold">
                <div>
                     <h1 className="text-white hover:text-orange-400"><Link to="/Home">Home</Link></h1>
                </div>
                <div>
                    <h1 className="text-white hover:text-orange-400"><Link to="/About2">About</Link></h1>
                </div>
                <div>
                    <h1 className="text-white hover:text-orange-400"><Link to="/About">Papular</Link></h1>
        
                </div>
                <div>
                
                    <h1 className="text-white hover:text-orange-400"><Link to="/Contact">Review</Link></h1>
                </div>
                <div className="pl-35">
                    <i class="fa-solid fa-bars"></i>

                </div>
                

            </ul>
 </nav>
            
               
            
            
       
    )
}
export default Nav