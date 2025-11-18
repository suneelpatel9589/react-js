import {Route, Routes } from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav"
import About from './About'
import About2 from "./About2"
import Slider from "./Contact"


function App() {
    return (
        <>
        
        
        
        <Nav/>
        

            <Routes>
                
                        <Route path="/Nav" element={<Nav/>}/>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/About2" element={<About2/>}/>
                        <Route path="/About" element={<About/>}/>
            </Routes>
            
        </>
    )
}
export default App 