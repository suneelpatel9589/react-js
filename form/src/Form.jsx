import { useState } from "react"

function Form(){
    let[data,setdata]=useState()
    let[Age,setAge]=useState()
    let[city,setcity]=useState()
    let[dob,setdob]=useState()
    // function setdata(e){
    //     console.log(e.target.value)
    // }
    function handlesubmit(e){
        e.preventDefault()
        alert(data+" "+Age +" "+city+" "+dob)
        
    }
    
    return(
        <>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">Name</label>
            <input type="text"  onChange={(e)=>setdata(e.target.value)} /> <br />

             <label htmlFor="">Age</label>
            <input type="text"  onChange={(e)=>setAge(e.target.value)} /> <br />

             <label htmlFor="">city</label>
            <input type="text"  onChange={(e)=>setcity(e.target.value)} /> <br />

             <label htmlFor="">dob</label>
            <input type="date"  onChange={(e)=>setdob(e.target.value)} /> <br />


           <input type="submit" />



        </form>

        
        
        </>
    )
}
export default Form