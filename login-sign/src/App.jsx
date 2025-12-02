import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Sign from "./Sign"


function App(){
  return(

    <>

    <Routes>
        <Route index element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
    </Routes>
    
    
    
    </>
   
  )
}
export default  App
