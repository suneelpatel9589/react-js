import { useState } from "react"

function Counter(){
    let[counter,setcounter]=useState(0)
    function inc(){
        counter=counter+1
        setcounter(counter)
    }
    return(
        <>
        <h1>this is counter page</h1>
        <h1>{counter}</h1>
        <button onClick={inc}>add</button><br />
        <button onClick={()=>setcounter(counter-1)}>subtract</button>
        <button onClick={()=>setcounter(0)}>reset</button>

        </>
    )
}
export default Counter