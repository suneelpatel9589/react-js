import { Routes, Route } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Nav from "./Nav"
import Service from "./Service"

function App() {
  return (
    <>
      <Nav/>
      <Service/>
    

      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>

    
      </Routes>
    </>
  )
}

export default App
