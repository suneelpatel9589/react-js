import { Route, Routes } from "react-router-dom"
import Frm from "./Component.jsx/Form.jsx"
import Showdata from "./Component.jsx/Showdata.jsx"

function APP(){
  return(
    <>
    
    <Routes>
      <Route index element={<Frm/>}/>
      <Route path="/Showdata" element={<Showdata/>}/>
    </Routes>
    
    
    </>
  )
}

export default APP