import { useState } from "react"


function Contact(){

    let[toggle,settoggle] = useState(false)
    return(
        <>
        <h1>contact</h1>

        <button onClick={()=>settoggle(!toggle)}> {toggle ? "good morning" : "good night"  }</button>

        {toggle ? <h1>good morning</h1>:<h1>good night</h1>}
        
        
        </>
    )
}

export default Contact