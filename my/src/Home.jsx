import { useContext, useState } from "react"
import { Data } from "./App"


function Home(){
    let value = useContext(Data)

    let [toggle,settoggle]=useState( false)
  
    return(

        <>
        
       
        <h1>this is a home-- {value}</h1>

        <button onClick={()=>settoggle(!toggle)}>{ toggle ?"good morning" :  "good night"}</button>

         { toggle ? <h1>good morning</h1> :  <h1>! good night</h1>}
         

        

           

             
             
         


        
        </>
    )
}

export default  Home

