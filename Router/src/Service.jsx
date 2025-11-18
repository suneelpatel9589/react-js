import { useState } from "react"

function Service(){
    let[count,setcounter]=useState(0)
    function inc(){
        count =count
        setcounter(count+1)
    }
    return(
       <div>

<h1><span>{count}</span></h1>
        <button onClick={inc}>inc</button>
        <button onClick={()=>setcounter(count-1)}>dec</button>
        <button onClick={()=>setcounter(0)}>res</button>
        
       </div>
    )
}
export default Service