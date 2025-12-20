import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
function Navbar(){
    let[open,setOpen]=useState(false)
    
    return(
        <>
        <nav className=" bg-green-800 p-4 relative">
            <div className="flex justify-around items-center ">
                <div className="text-3xl  text-orange-500 italic  ">Satnaplants</div>
                {/* desktop */}
                <div className=" text-white hidden sm:block space-x-10">
                    <a href="" className="">Home</a>
                    <a href="">About</a>
                    <a href="">Popular</a>
                    <a href="">Review</a>
                    
                </div>
                   <div className="sm:hidden text-white text-2xl cursor-pointer"onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faBars} /></div>
      </div>
    
            {open && (
        <div className="absolute left-0  mt-2 w-full bg-red-400 text-white space-y-3 py-4 sm:hidden">
          <a className="block px-6 text-xl">Home</a>
          <a className="block px-6 text-xl">About</a>
          <a className="block px-6 text-xl">Popular</a>
          <a className="block px-6 text-xl">Review</a>
        </div>
      )}


        
        </nav>
        </>
    )
}
export default Navbar