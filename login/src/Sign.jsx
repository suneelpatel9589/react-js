import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sign() {
    let[frmdata,setfrmdata]=useState({})
    let navigate=useNavigate()

    function hdlsumbit(e){
        let {name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
    }
    function finalsumbit(e){
        e.preventDefault()
        localStorage.setItem("userdata",JSON.stringify(frmdata))
        console.log(frmdata)
        navigate("/login")
    
    }
    return (

        <div>
            <h1>Sign form</h1>

            <form action="" onSubmit={finalsumbit}>
                <label htmlFor="">usename</label>
                <input type="text"  name="username" onChange={hdlsumbit}/> <br />

                
                <label htmlFor="">password</label>
                <input type="text"  name="password" onChange={hdlsumbit}/> <br />

                <input type="submit" />


            </form>
        </div>
    );
}

export default Sign