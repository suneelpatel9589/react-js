import { useState } from "react"

function Counter() {
    let[count,setcounter]=useState(0)
    function inc(){
        setcounter(count+1)
    }
    function dec(){
        if(count>0){
        setcounter(count-1)
    }
   }
    return (
        <div>
            <h1>this is a counter {count}</h1><br />
            <h1><span  className ="her">{count}</span></h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={()=>setcounter(0)}>res</button>
            

        </div>
    )
}

export default Counter