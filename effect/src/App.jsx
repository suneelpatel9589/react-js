import { useEffect, useState } from "react"
import Home from "./Home"


function App() {
  let[count,setCounter]=useState(0)
  let[color,setColor]=useState()
  useEffect(()=>{alert('working')})

  return (
    
    <div style={{backgroundColor:color}}>
      <h1>this is app</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCounter(count+1)}>+</button>

      <button onClick={()=>setColor("red")}>red</button>
      <button onClick={()=>setColor(" ")}>blue</button>
      <hr />

      <Home/>
    </div>

    


    
  )
}

export default App
