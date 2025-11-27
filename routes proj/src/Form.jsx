import { useState } from "react"

function Form(){
    let[frmdata,setfrmdata]=useState({name:"",age:"",city:""})
 
    function handlesubmit(e){
        let{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
        
    }
    function finalsubmit(e){
        e.preventDefault()
        console.log(frmdata)
    }
    
    return(
        <>
        <form action="" onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handlesubmit} /> <br />

             <label htmlFor="">Age</label>
            <input type="text"  name="age" onChange={handlesubmit} /> <br />

             <label htmlFor="">city</label>
            <input type="text" name="city"  onChange={handlesubmit} /> <br />

        
           <input type="submit" />



        </form>

        
        
        </>
    )
}
export default Form