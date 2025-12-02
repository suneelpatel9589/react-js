import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login(){


    let[frmdata,setfrmdata]=useState({})
    let navigator= useNavigate()
    function inputtype(e){
        let{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
    }

    function final(e){
        e.preventDefault()
        console.log(frmdata)
        localStorage.setItem('userdata',JSON.stringify(frmdata))
        navigator('./Sign')
        
    }

  return(

    <>
    <h1>sign up form</h1>

    <form action="" onSubmit={final}>
      <label htmlFor="">username</label>
      <input type="text" name="username"  onChange={inputtype}/> <br />

      
      <label htmlFor="">password</label>
      <input type="text" name="password"  onChange={inputtype}/> <br />

      <input type="submit" />

    </form>
    
    </>
  )
}
export default  Login
