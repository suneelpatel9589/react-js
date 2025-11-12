
import { useState } from "react"
function Hero(){
    let[data,setdata]=useState(32)  
      function soon(a){
        alert("working")
        setdata(90)
        
    }
  
    return(
        <>
        <h1>suneel -{data}</h1>
        <button onClick={()=>soon('react')}>click</button>
        
        </>
    )
}
export default Hero