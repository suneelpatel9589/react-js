import { useState } from "react"

function Login(){

    let[loginfrm,setloginfrm]=useState({})

    function loginhdl(e){
        let{name,value}= e.target
        setloginfrm({ ...loginfrm, [name]: value })

    }
     let localdata = JSON.parse(localStorage.getItem("userdata"));

    function finalsumbit(e){
        e.preventDefault()
        if(localdata.username != loginfrm.username || localdata.password != loginfrm.password){
        alert('not found')

    }
    else{
        alert('sucessfully')
    }
        
    }
   

    return(
        <>
        <h1>login form</h1>

        <form action="" onSubmit={finalsumbit}>
            <label htmlFor="">usename</label>
            <input type="text" name="username" onChange={loginhdl} /> <br />

            
            <label htmlFor="">password</label>
            <input type="text" name="password" onChange={loginhdl} /> <br />

            <input type="submit" />

        </form>
        
        
        
        </>
    )
}
export default Login