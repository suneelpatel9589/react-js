import { useState } from "react"

function Bgcolor(){
    let[color,setcolor]=useState('violet')
    return(
        <div style={{height:"100vh",backgroundColor:color}}>
            
            <h1><span>{color}</span></h1>


            <button onClick={()=>setcolor('Red')}>red</button>
            <button onClick={()=>setcolor('Pink')}>pink</button>
            <button onClick={()=>setcolor('Skyblue')}>skyblue</button>
            <button onClick={()=>setcolor('Green')}>green</button>
            <button onClick={()=>setcolor('Yellow')}>yellow</button>
            <button onClick={()=>setcolor('')}>reset</button>
        </div>
    )
}
export default Bgcolor