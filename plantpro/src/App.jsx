import {Route, Routes } from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav"
import About from './About'
import About2 from "./About2"
import Contact from "./Contact"






function App() {
    return (
        <>
        
        
        
       
    
            <Routes>
                
                    <Route path="/" element={<Nav/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/About2" element={<About2/>}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/Contact" element={<Contact/>}/>
                    </Route>
                        
            </Routes>
            
        </>
    )
}
export default App 