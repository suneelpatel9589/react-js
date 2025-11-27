import { createContext } from "react"
import Home from "./Home"
import Contact from "./Contact"

 let Data=createContext()
  let data1 = "hello student"

function App(){
 
  return(
    <>
    
    <h1>this is a app</h1>
    <Data.Provider value={data1}>

    {/* <Home/> */}
    <Contact/>

    </Data.Provider>
    
    </>
  )
}

export default App
export {Data}