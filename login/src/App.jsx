import {  Route, Routes } from "react-router-dom";
import Login from "./Login";
import Sign from "./Sign";

function App() {
  return (
    <>
    
    <Routes>
      <Route>
        <Route  index  element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
    
    
    </>


  )
}
export default  App
