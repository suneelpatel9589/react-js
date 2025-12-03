import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Form(){
    let[frmdata,setfrmdata]=useState({})
    let navigator=useNavigate()

    function handel(e){
        let{name,value}= e.target
        setfrmdata({...frmdata,[name]:value})
    }
    function final(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdata',frmdata)
        .then(res=>alert('data inserted'))
        navigator('./Showdata')

    }
    return(
        <>
        
        <form action="" onSubmit={final}>
            <label htmlFor="">name</label>
            <input type="text" name="name"  onChange={handel}/> <br />

            
            <label htmlFor="">age</label>
            <input type="text" name="age"  onChange={handel}/> <br />

            
            <label htmlFor="">contact</label>
            <input type="text" name="contact"  onChange={handel}/> <br />

            
            <label htmlFor="">city</label>
            <input type="text" name="city"  onChange={handel}/> <br />


            <input type="submit" />
        </form>
        
        </>
    )
}
export default Form