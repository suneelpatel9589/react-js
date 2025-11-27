import About from "./About"
import Contact from "./Contact"
// import Footer from "./Footer"

import Home from "./Home"
import Nav from "./Nav"
import { Routes, Route } from "react-router-dom"



function App() {
  return (


    
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;


