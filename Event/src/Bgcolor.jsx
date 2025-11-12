import { useState } from "react"

function Bgcolor(){
    let[color,setcolor]=useState('yellow')
    return(
        <div style={{height:"100vh",backgroundColor:color}}>
            
            <h1><span>{color}</span></h1>


            <button onClick={()=>setcolor('red')}>red</button>
            <button onClick={()=>setcolor('pink')}>pink</button>
            <button onClick={()=>setcolor('skyblue')}>skyblue</button>
            <button onClick={()=>setcolor('green')}>green</button>
            <button onClick={()=>setcolor('yellow')}>yellow</button>
        </div>
    )
}
export default Bgcolor